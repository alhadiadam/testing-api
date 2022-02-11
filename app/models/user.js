var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {   
        name: {type:String},
        email: {type:String},
        phone: {type:String},
        address:{type:String},
        id_number:{type:String},
        gender: {type:String}
    },{timestamps: true});  

module.exports = mongoose.model('User', UserSchema);