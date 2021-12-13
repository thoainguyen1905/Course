const Courses = require('../models/Courses');
// const {mongooseToObject} = require('../../util/mongoose');

// const {multiMongooseToObject} = require('../../util/mongoose');
class CourseControllers {
    //GET courses/slug
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .lean()
            .then(course => {
                res.render('courses/show',
                    { course })
            })
            .catch(next)
    }
    // GET courses/create
    create(req, res) {
        res.render('courses/create')
    }
    // POST courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDIZKCmZVnFeMk8nxez2wUOkzf1pw`;
        const course = new Courses(formData);
        course.save();
        res.redirect('/me/store/courses')
    }
    // course/:id/edit
    edit(req, res, next) {
        Courses.findById(req.params.id)
            .lean()
            .then(course => {
                res.render('courses/edit',
                    { course })
            })
            .catch(next)
    }
    // course/:id [PUT]
    update(req, res, next) {
        Courses.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/store/courses')
            })
            .catch(next)
    }
    // [DELETE] /courses/delete
    delete(req, res, next) {
        Courses.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('/me/store/courses')
            })
            .catch(next)
    }
    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Courses.restore({ _id: req.params.id })
            .then(() => {
                res.redirect('/me/store/courses')
            })
            .catch(next)
    }
    // courses/handler-form-action  [post]
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Courses.delete({ _id: { $in: req.body.courseIds } })// because courseIds is array don't use normal
                    .then(() => {
                        res.redirect('/me/store/courses')
                    })
                    .catch(next)
                break;
                default:
                    res.render('ERROR: Fail Post Form');

        }
    }
    //[DELETE] /courses/:id/force
    forceDelete(req, res, next) {
        Courses.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('/me/trash/courses')
            })
            .catch(next)
    }
}


module.exports = new CourseControllers;
