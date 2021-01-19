const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({path: __dirname + '/.env'})

const PORT = process.env.PORT;

app.set('view engine','ejs');
app.set('views','views');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));




const index = require('./routes/index');
app.use(index);





app.listen(PORT, ()=>{
    console.log("Server running at PORT " + PORT);
});