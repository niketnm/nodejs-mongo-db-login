//importing modules
var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var app = express();
var route = require('./route/route');

//using apps
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log("MongoDB connected");
});
mongoose.connection.on('error', (err)=>{
    if(err)
    {
        console.log("MongoDB connection failed" + err);
    }
    
});

//port number
const port = 3000;
app.use('/api', route);
app.use(express.static(path.join(__dirname, 'public')));

//testing
app.listen(port, ()=>{
    console.log('Server has started on port:'+port);
});