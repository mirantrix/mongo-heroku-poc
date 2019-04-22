

# Name
mongo-heroku-poc


# Description
Deploy MongoDB to a Cloud Plataform (PoC)


# Proof of Concept

• Set up a Heroku account && Install Heroku CLI

• Create or use a minimum viable Node.js App with Express.js framework

• Run application in local server

• Deploy Node.js App to Heroku Cloud Plataform

• Open the application in live



# Requirements

• [Node JS](https://nodejs.org/en/download/) as the Server version v0.10.15.1 it includes [NPM](https://www.npmjs.com/).

• Express framework for Node.js

• MongoDB Connection String into your application code

• Heroku Account && Install Heroku CLI



# Install & Run

```

$ git clone https://github.com/mirantrix/mongo-heroku-poc.git
$ cd mongo-heroku-poc
$ npm install

```

```

$ git commit -m "Initial commit"
$ heroku login
$ heroku create <app-name-here>
$ git push heroku master
$ heroku open

```



# Free Dyno Hours

• If dyno receives no web traffic in a 30-minute period, it will sleep.

• If a sleeping web dyno receives web traffic, it will become active again after a short delay (assuming your account has free dyno hours available).

• Accounts are given a base of 550 free dyno hours each month

• Documentation in their [Official Site](https://devcenter.heroku.com/articles/free-dyno-hours)





