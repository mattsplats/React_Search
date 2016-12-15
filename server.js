'use strict';

// Modules
const express    = require('express'),
      exphbs     = require('express-handlebars'),
      bodyParser = require('body-parser'),
      logger     = require('morgan'),
      mongoose   = require('mongoose'),
      Promise    = require('bluebird'),
      rp         = require('request-promise'),

      // Local dependencies
      Article    = require('./models/Article.js'),

      // Const vars
      app    = express(),
      hbs    = exphbs.create({ defaultLayout: 'main', extname: '.hbs' }),
      PORT   = process.env.PORT || 3000,
      DB_URI = process.env.MONGODB_URI || require('./mongodb_uri.json').LOCAL_URI;

// Handlebars init
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
if (process.env.PORT) app.enable('view cache');  // Disable view cache for local testing

// Morgan for logging
app.use(logger('dev'));

// Body parser init
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Route for static content
app.use(express.static(process.cwd() + '/public'));

// Mongoose init
mongoose.Promise = Promise;
mongoose.connect(DB_URI);
const db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});



// Render main site index
app.get('/', (req, res) => res.render('index'));


// Mongoose routes
app.get('/api/saved', (req, res) => 
  Article.find({}).then(data => 
    res.json(data)
  )
);

app.post('/api/saved', (req, res) => 
  Article.create(req.body).then(data =>
    res.json(data)
  )
);

app.delete('/api/saved', (req, res) =>
  Article.findByIdAndRemove(req.body.id).then(data => 
    res.json(data)
  )
);



// Init server
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
