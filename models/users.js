const mongoose = require ("mongoose");
const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    }
});

exports.Users = mongoose.model('Users', UserSchema);