
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

const workingList=[
  {
    logo:'img/working/freelance',
    name: 'Freelance',
    location: 'Cyberjaya',
    position: 'R&D Developer',
    tasks: 'Developed: IOT, Augmented & Virtual Reality, Instagram/Snapchat Filter, 360 Photography, Hologram Projection, Frontend & Backend Development',
    date: 'Dec 2017 - Present'
  },
  {
    logo:'img/working/interobang',
    name: 'Interrobang Sdn Bhd',
    location: 'Damansara',
    position: 'Unity Developer',
    tasks: 'Developing game logic for client, Helping integrate 3rd party SDK, Parsing SVG file in Unity Game Engine, Collaborate with other Developers, Artists, Game Designer and Project Manager ',
    date: 'Sept 2017 - Dec 2017'
  },
  {
    logo:'img/working/bestinet',
    name: 'Bestinet Payment Sdn Bhd',
    location: 'Cyberjaya',
    position: 'Jr. PHP Developer',
    tasks: 'Asisting with Senior Developer on project, Create layout design mobile app for e-wallet',
    date: 'May 2017 - Sept 2017'
  },
  {
    logo:'img/working/HPE',
    name: 'Hewlett Packard Enterprise',
    location: 'Cyberjaya',
    position: 'Intern',
    tasks: 'Creating mobile dashboard E-Ticketing using Microsoft Power BI, Create a notification alert system in Microsoft Excel',
    date: 'Sept 2016 - Feb 2017'
  },
  {
    logo:'img/working/photographer',
    name: 'Freelance',
    location: 'Melaka',
    position: 'Photographer',
    tasks: 'setting up photographic equipments, taking picture, editing and retouching album, compile to an album for club events in Universities',
    date: 'Jan 2011 - Jan 2016'
  },
]

const volunteerList = [
  {
    name:'Photographer, Microsoft Student Partner',
    club: 'Imagine Cup',
    years: '2016'
  },
  {
    name:'Bureau of Online Photography Competition',
    club: 'Minggu Alam Sekitar Melaka',
    years: '2015'
  },
  {
    name:'Head of Bureau Promotion and Mass Media',
    club: 'FV Malaysia',
    years: '2015'
  },
  {
    name:'Exco Multimedia, Penerbitan & Publisiti',
    club: 'Pembimbing Rakan Siswa',
    years: '2012 - 2013'
  },
  {
    name:'Exco Motivasi, Latihan, Modul',
    club: 'Pembimbing Rakan Siswa',
    years: '2011 - 2012'
  },

]

const portfolioList = [
  { 
    logo: '/img/merdekaDance.png',
    name: 'Merdeka Dance',
    desciption: 'Selebrating Malaysia Independence Day in Snapchat with Full Body Tracker',
    tech: 'Snapchat/Lens Studio',
    category: 'Augmented Reality'
  },
  { 
    logo: 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/01273596e4e92b9de8e8a11cd4ed455e.png',
    company: 'AR Portal Masjid Besi',
    desciption: 'Create virtual tour ',
    tech: 'Snapchat',
    category: 'Augmented Reality'
  },
  { 
    logo: 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png',
    company: 'GameHub Sdn Bhd',
    desciption: 'Game for lonely people',
    tech: 'Game',
    category: 'entertainment'
  }
]

// skill page 
app.get('/portfolio', function(req, res) {
  res.render('pages/portfolio',{portfolios: portfolioList});
});

// about page 
app.get('/about', function(req, res) {
  res.render('pages/about', { works: workingList });
});

app.listen(process.env.PORT || 5000)
