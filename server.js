const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || process.env.PORT_LOCAL;

mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true })
  .then(db => console.log(`Mongo DB: 200 ok`))
  .catch(err => console.log(`ERROR: ${err}`));

var User = mongoose.model('User', { name: String });

app.get('/', (req, res) => {
  const user = new User({ name: 'MongoDB-Heroku-PoC' });
  user.save();

  User.find({})
    .then(users => {
        res.json(users);
    }).catch(err => {
        console.log(err);
  });
});

app.listen(port);
