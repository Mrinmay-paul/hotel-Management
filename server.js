const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/person');
const menu = require('./models/menu');
require('dotenv').config();

//it is a middleware to take the various forms of data from the client and serve to the database
//it is capable to take various form of data
//here it takes the json form of data

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;


app.get('/', function(req, res){
    res.send('welcome to my hotel... How i can help you? We have list of menu');
});

app.get('/chicken', (req, res)=>{
    res.send('sure sir, i would love to serve chicken');
});

app.get('/idli',(req,res)=>{
    let customize_idli = {
        name: 'south indian idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney: true
    }
    res.send(customize_idli);
});

app.post('/items',(req,res)=>{
    res.send('data is saved');
})

app.post('/person',async (req,res)=>{
    try{
        const data = req.body;
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error:'});
    }
    
});

app.get('/person', async(req, res)=>{
    try{
        const getData = await Person.find();
        console.log('data saved');
        res.status(200).json(getData);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error:'});
    }
})



//use to host in local system.
app.listen(PORT,()=>{
    console.log('server is running;')
});