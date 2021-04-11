# DataHacks_2021

*Note we had to recopy over all of our work for this project from another repo so the contributions are not an accurate reflection of the distribution of work.


Welcome to our project for the Economic track of  DataHacks 2021!  

In this repository you will find several source files that allow you to predict prosperity values and values of the 9 different pillars for every country in our dataset.  
We provide an API for users to interact with the data themselves and quickly create models and model explanations for prosperity and pillar scores.  In src/model_pillars.py, you will find a PillarExplainer class that takes the following arguments: mod, random_state, test_size, and alpha.  You can choose between 'lasso', 'elastic', or 'svr' regression models, or get the best of all three with 'ensemble' as the mod argument.  Random_state and test_size can be customized to affect how the data is split between train and validation, and alpha will modify the lasso and elastic regression models.  You can train a single pillar with get_model(pillar), or train all pillars with get_models().  After training the model, you can explain feature importance with the get_impt_cat(pillar) method.  Simply choose one of the 9 pillars, and get_impt_cat will train the model for that pillar and produce a visualization of SHAP model explainer values.  Check the link here for more information on SHAP: https://christophm.github.io/interpretable-ml-book/shap.html.

In addition to the PillarExplainer class, we also have our PredictionModel class under src/predict_prosperity.py, which inherits PillarExplainer and adds methods to predict the overall prosperity scores for countries in the dataset.  Predict prosperity scores with the predict_prosperity() method, and add ranks to the prosperity scores with determine_ranks().

pip install -r requirements.txt to get started
