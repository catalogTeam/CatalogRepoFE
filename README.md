![example workflow](https://github.com/catalogTeam/CatalogRepoFE/actions/workflows/node.js.yml/badge.svg)

# How to build the Music Catalog App

#step 1

create a spotify developer account
https://developer.spotify.com/dashboard/login
and then create an app

#step 2

create a new folder

clone the repos both the back and the frontend

git clone https://github.com/catalogTeam/CatalogRepoFE

git clone https://github.com/colewarner24/CatalogRepoBackend

#step 3 init backend

run -> npm i

and then create a .env folder

get the mongodb uri and assign it to MONGODB_URI in .env file
get the client secret and client id and assign them to the 
CLIENT_SECRET and CLIENT_ID variables in the .env file
create a random string and assign it to TOKEN_SECRET variable
in your .env file

# init frontend

run -> npm i

in the backend run -> npm run dev
and in the frontend run -> npm start

and the application should run !!!






