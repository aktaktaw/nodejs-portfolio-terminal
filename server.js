
const express = require('express')
const app = express()
const port = process.env.PORT || 5000


app.use(express.static('public'))

app.set('view engine','ejs')

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// skill page 
app.get('/portfolio', function(req, res) {
  res.render('pages/portfolio');
});

app.listen(process.env.PORT || 5000)
