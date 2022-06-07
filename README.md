![example workflow](https://github.com/catalogTeam/CatalogRepoFE/actions/workflows/node.js.yml/badge.svg)

## Getting Started

If you want to be able to replicate this project, then the instructions below should help.
 
Front-end: https://github.com/catalogTeam/CatalogRepoFE

Back-end: https://github.com/colewarner24/CatalogRepoBackend

To run this locally, all you need to do is download both repositories and run them individually.

Locally, the Front-end runs on port 3000, and the Back-end runs on port 5000.

Front-end command script

```md
npm start
```

Back-end command script
```md
npm run dev
```

## Setting Up Heroku Frontend Environmental Variables

Heroku requires frontend environmental variables solely for the purpose of being able to seperately run both locally and on heroku.
We add an evironmental variable for the frontend to check which environment the FE is being run on. If our project is being run on heroku, our backend port will be directed to the Heroku-backend app, while if otherwise, it will be directed to the port 5000 of our local backend.

```md
***NODE_ENV = production***

***REACT_APP_URL = "https://YOUR_HEROKU_BACKEND.herokuapp.com/***

## Installing Packages Used
```

Use command 

We used a ton of packages, so best way to install it is to just use the command

```md
npm install
```

On the terminal

## Continuous Integration / Deployment

We used heroku for our CI from this github repository. Connecting our CI requires editing our YML file and runnning the code below.

```md
npx prettier --write .
```

The CI requires prettier to be checked and ran before the continuing of our CI.

In the -> Github\workflow\node.js.yml

Edit the snippet below with your own heroku_app_name and heroku_email. (This is done by signing up on their website and obtaining the information after deploying a project)

```
with:
    heroku_api_key: ${{secrets.HEROKU_API_KEY}}
    heroku_app_name: "heroku_app_name" #Must be unique on Heroku
    heroku_email: "heroku_email" #Must be the one you used on Heroku
```

