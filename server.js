const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const Users = require ('./models/users').Users;
const mongoose = require ('mongoose');

const uri = process.env.mongoUri || require('./config.json').mongoUri;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb coneection error;;;;;'));

  //const Posts = client.db("ExampleAppDb").collection("Posts");
  const port = process.env.PORT || 8080;

  const app = express()
  app.use(express.json());
  app.use(cors());

  app.get('/ping', function (req, res) {
  return res.send('pong');
  });

  app.get('/', function (req, res) {
      res.body = "yeah boi";
      return res.send('ur a cool bean');
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
        res.json({ message: "ur moms a hoe ur a hoe too" });
    }
});

  app.listen(port, () => console.log(`Server now running on port ${port}!`));

