const fs = require('fs');
const path = request('path');
const express = require('express');

const app = app.express();
app.set('views', path.join(__dirname, 'views'));
app.ser('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=> 
res.render('index',{title:'Index'}));

app.listen(3000, ()=>console.log(
    'PS Project running on port 3000!'
));