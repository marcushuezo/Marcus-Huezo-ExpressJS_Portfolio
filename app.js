const express = require('express');
const path = require('path');
const logger = require('morgan');
const registerRoutes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.locals.site = {
  name: 'Marcus Huezo',
  email: 'marcus.huezo@bell.net',
  github: 'https://github.com/marcushuezo',
  linkedin: 'https://www.linkedin.com/in/marcushuezo/'
};
registerRoutes(app);

module.exports = app;