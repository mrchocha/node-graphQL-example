const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number,
    address: String
})


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;