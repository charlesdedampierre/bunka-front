# BunkaTopics web app

This project was made to show the results of [BunkaTopics](https://github.com/charlesdedampierre/BunkaTopics).
Bunkatopics is a Topic Modeling Visualisation, Frame Analysis & Retrieval Augmented Generation (RAG) package that leverages LLMs
It is built around React and D3.js and made to work with the `api` in the same repository

```bash
git clone https://github.com/charlesdedampierre/bunka-front
cd bunka-front/
```

## Start a new envrionement

```bash
python3 -m venv bunka-front-env
source bunka-front-env/bin/activate
```

## Install bunkatopics

```bash
pip -q install bunkatopics --upgrade
pip install ipywidgets
```

## Run bunkatopics

Run the run_bunka.ipynb file. This will save the infromation into the web/ directory

## Run the front-end

```bash
cd web/
npm install # install packages required for the front-end
npm start # start the web-app
```
