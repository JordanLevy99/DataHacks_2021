from src.model_pillars import *
class PredictionModel(PillarExplainer):
    def __init__(self, mod='lasso', random_state=42, test_size=0.25, alpha=0.5):
        super().__init__(mod, random_state, test_size, alpha)
        self.get_models()

        # self.pillar_train, self.pillar_test = read_in_pillars(remove_star=True)
        # self.random_state = random_state
        # self.test_size = test_size
        # self.alpha = alpha
        # self.mod_str = mod
        # self.models = {}
        # self.pillars = list(self.pillar_train.keys())
        #


    def get_test_data(self, pillar):
        """
        Gets test data ready for model
        """
        filt_data = self.pillar_test[pillar].loc[:, ~((self.pillar_test[pillar].columns.str.contains('_year')) | (self.pillar_test[pillar].columns == pillar))]
        X = filt_data[filt_data.columns[1:]]
        return X


#     def lasso(self, X_test, pillar):
#         """
#         Returns predictions and score of model.
#         ----
#         Used in predict()
#         """

#         X_train, X_val, y_train, y_val = self.get_train_val(pillar)

#         Lreg = Lasso(alpha = self.alpha)
#         Lreg.fit(X_train, y_train)


#         predictions = Lreg.predict(X_test.iloc[: ,4:])
#         score = Lreg.score(X_val, y_val)
#         print("Score for lasso model for {0}:".format(pillar), score)

#         return predictions

#     def elastic(self, pillar, X_train, y_train, X_val, y_val):

#         X_train, X_val, y_train, y_val = self.get_train_val(pillar)

#         en = ElasticNet()
#         en.fit(X_train, y_train)

#         predictions = en.predict(X_test.iloc[: ,4:])

# #         self.models[pillar] = en
#         predictions = en.predict(X_test.iloc[: ,4:])
#         score = en.score(X_val, y_val)
#         print("Score for lasso model for {0}:".format(pillar), score)

#         return predictions

    def predict_prosperity(self):

        res = pd.DataFrame()

        # predict pillar score for each country of each year
        for pillar in self.pillars:
            X_test = self.get_test_data(pillar)
            res["{0}_preds".format(pillar)] = self.models[pillar].predict(X_test.iloc[:, 4:])

        # calcualte prosperity score based on pillar scores
        res["prosperity_preds"] = res.mean(axis=1)

        # prettify res df
        res[["country", "isonum", "isocode", "year"]] = X_test[["country", "isonum", "isocode", "year"]]
        cols = res.columns.tolist()
        cols = cols[-4:] + cols[:-4]
        res = res[cols]

        return res

    def determine_ranks(self):

        df = self.predict_prosperity()

        df_15 = df[df.year == 2015]
        df_15["prosperity_rank"] = df_15["prosperity_preds"].rank(ascending=False)
        df_15 = df_15.sort_values(by="prosperity_rank", ascending=True)

        df_16 = df[df.year == 2016]
        df_16["prosperity_rank"] = df_16["prosperity_preds"].rank(ascending=False)
        df_16 = df_16.sort_values(by="prosperity_rank", ascending=True)

        df = df_15.append(df_16)

        return df
