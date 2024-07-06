const  mongoose = require('mongoose');

require('dotenv').config();
//define mongodb connection url
//const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL = process.env.DB_URL;

//set mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//mongodb maintain a default connection object representing the mongodb connection
const db = mongoose.connection;


// defining the event listener for database connection
db.on('connected',()=>{
    console.log('connected to the MongoDB server...');
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected.');
});

db.on('error',(error)=>{
    console.log('MongoDB connection error.', error);
});


//export the mongodb connection so that other nodejs can acces the it
module.exports = db;