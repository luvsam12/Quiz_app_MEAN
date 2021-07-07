### Quiz_app_MEAN

---
# MEAN stack application

A barebones Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:heroku/Quiz_app_MEAN.git
cd frontend/quiz-app
npm install
ng serve
-----------
cd backend
npm install
npm start ( using node)
(or)
npm run server (using nodemon)
```

Your frontend app should now be running on [localhost:4200](http://localhost:4200/).
Your backend app should now be running on [localhost:3000](http://localhost:3000/).


## Heroku Deployed 

The application is deployed on [Heroku](https://quizbuzz2.herokuapp.com)


## Documentation

# Packages used
```sh
Angular 10
Express
Nodemon
Mongoose
Material
Carousel
Charts.js
JWT/Passport
HTTPClient
```

# A brief abut the project
```sh
- Folder structure
  - Frontend -> Code for the client application using Angular 10 as a framework. It have various components like mainscreen, header, footer, etc. Services for making code reusable like API calling etc.
  - Backend ->  Code for backend logic and database management usinf express/mongoDB. have various endpoint to make API request. Models to define Schema of the object, etc.
```
