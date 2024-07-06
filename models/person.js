const mongoose = require('mongoose');
const { type } = require('os');


//define the person schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        enum:['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true
    }
});

//create person model

const Person = mongoose.model('Person', personSchema);
module.exports = Person;