const newsRouter = require('./news');
const newsSite = require('./site');
const newsCourse = require('./courses');
const meRouter = require('./me');
const accountRouter = require('./login');


function route(app) {
     
      app.use('/news',newsRouter);
      app.use('/me',meRouter);
      app.use('/courses',newsCourse);
      app.use('/', newsSite);
      app.use('/account',accountRouter);
      
}
module.exports = route;