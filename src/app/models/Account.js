const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Account = new Schema({
    username: {type:String},
    password: {type:String}
})

mongoose.plugin(slug);
Account.plugin(mongooseDelete, {
    deleteAt:true,
    overrideMethods:'all',
});

module.exports = mongoose.model('Account', Account);