const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000
const methodOverride = require('method-override');
const route = require('./routes');
const db = require('./config/db');

//Connect DB
db.connect();
app.use(express.static(path.join(__dirname, "public")));
// HTTP loger
app.use(express.urlencoded({
  extended: true,
}))
//methodoverride Form
app.use(methodOverride('_method'))

app.use(express.json());
app.use(morgan('combined'))
app.use(cookieParser())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// Template engine
app.engine('hbs', handlebars({
  extname: 'hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// console.log('PATH: ', path.join(__dirname, 'resources/views'))

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})