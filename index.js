const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 4000;
// Settings
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

//Handlebars Config
app.engine(
    '.hbs', 
    hbs({
        defaultLayout: 'main',
        layoutDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    })
);


app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/works', (req, res)=>{
    res.render('works');
});

app.get('/services', (req, res)=>{
   res.render('services');
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

app.use((req, res)=>{
    res.render('404');
});

app.listen(PORT, ()=>{
    console.log (`Server at http://localhost:${PORT}`);
});

