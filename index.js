//require api dependencies
const express = require('express');
const path    = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const redis  = require('redis');
const client = redis.createClient();

//require the environment variables and read them
require('dotenv').config();

const port = process.env.PORT || 3000;

//require app routes
const routes = require('./routes/api');

//connect to redis & initialize app
client.on('connect', () => {
     console.log('Connected to Redis');
});

const app = express();

//setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set methodOverride to be able to send delete requests
app.use(methodOverride('_method'));

//app middleware
app.use(routes);

//set 404 message if api doesnt exist
app.use((request, response) => {
  response.status(404)
  response.send('This endpoint does not exist')
});

// serve application on specified port
app.listen(port, () => {
  console.log('Server started on port ' + port);
});


module.exports = app;