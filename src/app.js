const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public");
const partials_path = path.join(__dirname,"../templates/partials");
const viewpath = path.join(__dirname,"../templates/views"); 

app.use(express.static(static_path))
app.set('view engine','hbs');
app.set('views',viewpath)
hbs.registerPartials(partials_path);


app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/weather',(req,res)=>{
    res.send('weather');
});

app.get('*',(req,res)=>{
    res.send('404 error');
});

app.listen(port,()=>{console.log(`app is working on ${port}`)});