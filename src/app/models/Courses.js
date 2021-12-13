const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Courses = new Schema({
    name: { type: String, maxlength: 255 },
    information: { type: String, maxlength: 1200 },
    img: { type: String, maxlength: 1200 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, maxlength: 255 },
    level: { type: String },
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
    deleteAt: { type: Date, default: Date.now() },
})

mongoose.plugin(slug);
Courses.plugin(mongooseDelete, {
    deleteAt:true,
    overrideMethods:'all',
});

module.exports = mongoose.model('Courses', Courses);