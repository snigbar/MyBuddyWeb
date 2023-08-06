const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        // Add email validation using a regex pattern
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    picturePath:{
        type: String,
        default: ''
    },
    friends: {
        type: Array,
        default: []
    },
    impressions: Number,
    viewedProfile: Number,
    location: String,
    occupation: String,

},{
    timestamps: true
})

const User = mongoose.model('User', UserSchema)
module.exports = User