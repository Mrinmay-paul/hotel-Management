const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        default: '$2',
        required: true
    },
    taste:{
        type: String,
        enum: ['sweet','spicy','sour'],
        required: true
    },
    isdrink:{
        type: Boolean,
        degault: false
    },
    ingerdients:{
        type: [String],
        default: []
    },
    num_sales:{
        type: Number,
        default: 0,
    }
});

const menu = mongoose.model('menu', menuSchema);
module.exports = menu;