const  Course = require('../models/Courses');

// const {multiMongooseToObject} = require('../../util/mongoose');
class SiteControllers {
    home(req,res,next){
        // res.render('home');
        Course.find({})
        .lean()
        .then(courses => {
            res.render('home',{
                courses
            })
        })
        .catch(next);
    }
}


module.exports = new SiteControllers;
