const Course = require('../models/Courses');

const {multiMongooseToObject} = require('../../util/mongoose');
class MeControllers {
    // me/store/courses
    me(req, res, next) {
        // res.render('home');
        Promise.all([Course.find({}) ,Course.countDocumentsDeleted()])
           
            .then(([courses, deletedCount]) => {
                res.render('me/store-course', {
                    deletedCount,
                    courses:multiMongooseToObject(courses),
                })
            })
            .catch(next)

    }
    trash(req, res, next) {
        Course.findDeleted({})
            .lean()
            .then(courses => {
                res.render('me/trash-course', {
                    courses
                })
            })
            .catch(next);
    }
}


module.exports = new MeControllers;
