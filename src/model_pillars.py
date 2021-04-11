###### For predicting impact of categories for each pillar ######

import os
import numpy as np
from sklearn.model_selection import train_test_split, GridSearchCV, cross_val_score
import shap
import matplotlib.pyplot as plt
from sklearn.linear_model import Lasso, ElasticNet
from sklearn.svm import SVR
from sklearn.preprocessing import StandardScaler
import warnings
from src.etl import *
import random

class PillarExplainer:
    def __init__(self, mod='lasso', random_state=42, test_size=0.25, alpha=0.5, include_svr=True):
        self.pillar_train, self.pillar_test = read_in_pillars(remove_star=True)
        self.random_state = random_state
        self.test_size = test_size
        self.alpha = alpha
        self.mod_str = mod
        self.models = {}
        self.include_svr = include_svr
        self.pillars = list(self.pillar_train.keys())
        self.pillar_dict = {'econ':'Economic Quality', 'busi':'Business Environment', 'gove':'Governance',\
                   'educ':'Education', 'heal':'Health', 'safe':'Safety and Security', 'pers':'Personal Freedom',\
                   'soci':'Social Capital', 'envi':'Natural Environment'}
        warnings.filterwarnings("ignore")

    def standardize(self, X):
        scaler = StandardScaler()
        return scaler.fit_transform(X)
    
    def get_train_val(self, pillar):
        """
        Returns [pillar] dataset as training and testing dataset.

        ----

        Used in get_impt_cat()
        """
    #     random_state = 42
        filt_data = self.pillar_train[pillar].loc[:, ~((self.pillar_train[pillar].columns.str.contains('year')) | (self.pillar_train[pillar].columns == pillar))]
        X = filt_data[filt_data.columns[5:]]
        y = self.pillar_train[pillar][pillar]

        X_train, X_val, y_train, y_val = train_test_split(X, y, random_state=self.random_state, test_size=self.test_size)
        return X_train, X_val, y_train, y_val

    def ensemble(self, pillar, X_train, y_train, X_val, y_val):
        model_dict = {}
        model_lst = ['lasso', 'elastic']
        if self.include_svr: model_lst.append('svr')
        for mod in model_lst:
            score, model = eval('self.'+mod)(pillar, X_train, y_train, X_val, y_val)
            score += random.uniform(-0.00000001, 0.00000001)
            model_dict[mod] = (score, model)
        top_score, top_model = sorted(model_dict.values())[-1]
        self.models[pillar] = top_model 
        return top_score, top_model
    
    def svr(self, pillar, X_train, y_train, X_val, y_val):
        """
        Returns svr model to be inputted into SHAP explainer.
        Returns score of svr model as well.

        ----

        Used in get_impt_cat()
        """
        parameters = {'kernel':['rbf', 'poly'], 'C':[0.1, 0.25, 0.5, 1, 2]}
        svr = SVR()
        #Lreg.fit(X_train, y_train)
        clf = GridSearchCV(svr, parameters, cv=5)
        clf.fit(X_train, y_train)
        self.models[pillar] = clf.best_estimator_
        # plot predicted values vs true
        #print(Lreg.predict(X_test))
        score = clf.best_score_
        print(f"Score of SVR {pillar} model: {score}\n")
        return score, clf.best_estimator_
    
    def lasso(self, pillar, X_train, y_train, X_val, y_val):
        """
        Returns lasso model to be inputted into SHAP explainer.
        Returns score of lasso model as well.

        ----

        Used in get_impt_cat()
        """
        parameters = {'alpha':np.linspace(0.1, 2.1, 10)}
        Lreg = Lasso(alpha = self.alpha)
        #Lreg.fit(X_train, y_train)
        clf = GridSearchCV(Lreg, parameters, cv=5)
        clf.fit(X_train, y_train)
        self.models[pillar] = clf.best_estimator_
        # plot predicted values vs true
        #print(Lreg.predict(X_test))
        score = clf.best_score_
        print(f"Score of Lasso {pillar} model: {score}")
        return score, clf.best_estimator_

    def elastic(self, pillar, X_train, y_train, X_val, y_val):
        parameters = {'alpha':np.linspace(0.1, 2.1, 10), 'l1_ratio':np.linspace(0, 1, 10)}
        en = ElasticNet()
        clf = GridSearchCV(en, parameters, cv=5)
        clf.fit(X_train, y_train)
        self.models[pillar] = clf.best_estimator_
        score = clf.best_score_
        print(f'Score of ElasticNet {pillar} model: {score}')
        if self.include_svr: print()

        # consider adding y_pred here


        return clf.best_score_, clf.best_estimator_


    def make_shap(self, model, X_train, X_val):
        """
        Gets shap values of model
        ----

        Used in get_impt_cat()
        """
        # ***use X_test or X_train?
        try: explainer = shap.LinearExplainer(model, X_train, feature_dependence="independent")
        except: explainer = shap.KernelExplainer(model, X_train) #, feature_dependence="independent")
        shap_values = explainer.shap_values(X_val)
        return shap_values



    def shap_viz_1(self, df_shap, df, feature_list, pillar='total'):
        """
        Returns bar plot of each categories impact on pillar score
        ----

        Used in get_impt_cat()
        """
        # Make a copy of the input data
        shap_v = pd.DataFrame(df_shap)
        #feature_list = df.columns
        shap_v.columns = feature_list
        df_v = df.copy()#.reset_index(drop=True)
        # Determine the correlation in order to plot with different colors
        corr_list = list()
        for i, feat in enumerate(feature_list):#feature_list:
#             print(shap_v[feat],df_v[:, i])
            b = np.corrcoef(shap_v[feat],df_v[:, i])[1][0]
            corr_list.append(b)
        corr_df = pd.concat([pd.Series(feature_list),pd.Series(corr_list)],axis=1).fillna(0)
        # Make a data frame. Column 1 is the feature, and Column 2 is the correlation coefficient
        corr_df.columns  = ['Variable','Corr']
        corr_df['Sign'] = np.where(corr_df['Corr']>0,'lightgreen','red')

        # Plot it
        shap_abs = np.abs(shap_v)
        k=pd.DataFrame(shap_abs.mean()).reset_index()
#         print(k)
        k.columns = ['Variable','SHAP_abs']
        k2 = k.merge(corr_df,on = 'Variable', how='inner')
        k2 = k2.sort_values(by='SHAP_abs',ascending = True)
        colorlist = k2['Sign']
        ax = k2.plot.barh(x='Variable',y='SHAP_abs',color = colorlist, figsize=(5,6),legend=False)
        ax.set_xlabel("SHAP Value (Green = Positive Impact, Red = Negative Impact)")
        if os.path.exists('figures/shap_plots')==False: os.mkdir('figures/shap_plots')
        plt.title(f'Feature Importance for {self.pillar_dict[pillar]}');
        plt.savefig(f'figures/shap_plots/shap_{pillar}.png', dpi=800, bbox_inches='tight');


    def shap_viz_2(self, shap_values, X_val):
        """
        Returns fancy plot of each categories impact on pillar score
        ----

        Used in get_impt_cat()
        """
        shap.summary_plot(shap_values, X_val)



    def get_model(self, pillar):
        # split into training and testing dataset
        X_train, X_val, y_train, y_val = self.get_train_val(pillar)
        X_train_std, X_val_std = self.standardize(X_train), self.standardize(X_val)
        # model and score of model
        score, model = eval('self.'+self.mod_str)(pillar, X_train_std, y_train, X_val_std, y_val)
        #^^utilize score???
        return model, X_train_std, X_val_std, list(X_train.columns)

    def get_models(self):
        for pillar in self.pillars:
            self.get_model(pillar)
        print('Done, check self.models')

    def get_model_explainers(self):
        for pillar in self.pillars:
            self.get_impt_cat(pillar)
        print('Plots saved in figures/shap_plots/')
        
    def get_impt_cat(self, pillar):
        """
        Outputs viz of impact of categories.

        ----

        Example run: self.get_impt_cat("busi")
        """

        model, X_train, X_val, feature_list = self.get_model(pillar)

        # ***use X_test or X_train?
        shap_values = self.make_shap(model, X_train, X_val)

        # viz
        # easier to understand version of shap_viz_2
        self.shap_viz_1(shap_values, X_val, feature_list, pillar)
        # cooler looking version of shap_viz_1
        #shap_viz_2(shap_values, X_test)
