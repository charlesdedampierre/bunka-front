# BunkaTopics web app

This is a more sophisticated front-end for [BunkaTopics](https://github.com/charlesdedampierre/BunkaTopics) using React and D3.js.

## Clone the Git repository

```bash
git clone https://github.com/charlesdedampierre/bunka-front
cd bunka-front/
```

## Start a new environment to prevent conflicts

```bash
python3 -m venv bunka-front-env # create the env
source bunka-front-env/bin/activate # activate the env
```

## Install bunkatopics

```bash
pip -q install bunkatopics --upgrade # install the last version in a quiet mode
pip install ipywidgets
```

## Run bunkatopics

Run the run_bunka.ipynb file. This script saves information into the web/public/ directory. The information (topics and documents) is then read by the front-end

## Run the front-end

The front-end is run like a React App.

```bash
cd web/
npm install # install packages required for the front-end
npm start # start the web-app
```
