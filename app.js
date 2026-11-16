const express = require('express');
const path = require('path');
const registerRoutes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.locals.site = {
  name: 'Marcus Huezo',
  email: 'marcushuezo@bell.net'
};
registerRoutes(app);

module.exports = app;