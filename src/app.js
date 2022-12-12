const bodyParser = require('body-parser');
const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');
      session = require('express-session');
      bodyparser = require('body-parser');
      fileUpload = require("express-fileupload")

const app = express();

// importing routes
const rutaInicio = require('./rutas/inicio');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'bdremates'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', rutaInicio);

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
