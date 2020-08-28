
const express = require('express')
const app = express()
const port = 443


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

app.listen(port, () => {
  console.log(`Portfolio app is listening at http://localhost:${port}`)
})
