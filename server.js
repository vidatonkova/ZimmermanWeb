const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const Users = require ('./models/users').Users;
const Posts = require ('./models/posts').Posts;
const mongoose = require ('mongoose');

const uri = process.env.mongoUri || require('./config.json').mongoUri;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));


  const port = process.env.PORT || 8080;

  const app = express()
  app.use(express.json());
  app.use(cors());

  app.get('/ping', function (req, res) {
  return res.send('pong');
  });

  app.get('/users/find', function (req, res) {
      Users.find({}, (error, documents) => {
        if (error) {
          res.send(error);
        }
        else {
          res.send(documents);
        }
      });
  });

  app.post('/users/create', async (req, res) => {
    
    const user = new Users({
        fname: req.body.fname,
        lname: req.body.lname
    });
    
    try {
        const saveUser = await user.save();
        res.json(saveUser);
    }
    catch (err) {
      console.error(err);
        res.json({ message: "u have a bad user" });
    }
});

app.post('/discuss', async (req, res) => {

  const post = new Posts({
    question: req.body.question,
    answer: req.body.answer
  });

  try {
      const savePost = await post.save();
      res.json(savePost);
  }
  catch (err) {
    console.error(err);
      res.json({ message: "ur question is bad" });
  }
});

app.get('/discuss', async (req, res) => {
  Posts.find({}, (error, documents) => {
    if (error) {
      res.send(error);
    }
    else {
      res.send(documents);
    }
  });

});

  app.use('/', express.static('../client/build'))
  app.use(express.static('../client/build'))
 
  app.all('/*', (req, res) => {
    // res.status(201).json({message: "nothing here!"});
    res.sendFile(path.resolve("../client/build/index.html"));
  });
  

  app.listen(port, () => console.log(`Server now running on port ${port}!`));

