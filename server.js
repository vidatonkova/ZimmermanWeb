const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const uri = "mongodb+srv://vidavida:password@cluster0.xng4p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.log(err);  
    throw "MongoConnectionError"
  }
  //const Posts = client.db("ExampleAppDb").collection("Posts");
  const port = process.env.PORT || 8080;

  const app = express()
  app.use(express.json());
  app.use(cors());

  app.get('/ping', function (req, res) {
  return res.send('pong');
  });

  app.get('/', function (req, res) {
      res.send('hi');
  });

  app.listen(port, () => console.log(`Server now running on port ${port}!`));
});
