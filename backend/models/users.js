const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('Users', userSchema, 'Users');