![example workflow](https://github.com/catalogTeam/CatalogRepoFE/actions/workflows/node.js.yml/badge.svg)

# Catalog Repository Frontend

Developed with NODE js, Express, MongoDB, and calls to the SpotifyAPI.

Catalog Product Spec: https://docs.google.com/document/d/19jHN31FKUMMZ6EW8DFhTgSvYol8LVn-j9hdNSQfbLMQ/edit?usp=sharing

Updated Product Spec: https://docs.google.com/document/d/1ogO4qJQe5q4V0Pby3Te-ghBrWuaUdyLSyqtJD5cvtKU/edit

***(based on requirements, scroll down to see the updated asepcts of the project)***

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
NODE_ENV = production

REACT_APP_URL = "https://YOUR_HEROKU_BACKEND.herokuapp.com/
```

## Installing Packages Used

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

