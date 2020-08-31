
const express = require('express')
const app = express()
const port = process.env.PORT || 5000


app.use(express.static('public'))

app.set('view engine','ejs')

const workingList=[
  {
    logo:'/img/logo.png',
    name: 'Freelance',
    location: 'Cyberjaya',
    position: 'R&D Developer',
    tasks: 'Developed: IOT, Augmented & Virtual Reality, Instagram/Snapchat Filter, 360 Photography, Hologram Projection, Frontend & Backend Development',
    date: 'Dec 2017 - Present'
  },
  {
    logo:'/img/working/itrb-logo.png',
    name: 'Interrobang Sdn Bhd',
    location: 'Damansara',
    position: 'Unity Developer',
    tasks: 'Developing game logic for client, Helping integrate 3rd party SDK, Parsing SVG file in Unity Game Engine, Collaborate with other Developers, Artists, Game Designer and Project Manager ',
    date: 'Sept 2017 - Dec 2017'
  },
  {
    logo:'/img/working/bestinet-logo.png',
    name: 'Bestinet Payment Sdn Bhd',
    location: 'Cyberjaya',
    position: 'Jr. PHP Developer',
    tasks: 'Asisting with Senior Developer on project, Create layout design mobile app for e-wallet',
    date: 'May 2017 - Sept 2017'
  },
  {
    logo:'/img/working/hpe-logo.png',
    name: 'Hewlett Packard Enterprise',
    location: 'Cyberjaya',
    position: 'Intern',
    tasks: 'Creating mobile dashboard E-Ticketing using Microsoft Power BI, Create a notification alert system in Microsoft Excel',
    date: 'Sept 2016 - Feb 2017'
  },
  {
    logo:'/img/logo.png',
    name: 'Freelance',
    location: 'Melaka',
    position: 'Photographer',
    tasks: 'setting up photographic equipments, taking picture, editing and retouching album, compile to an album for club events in Universities',
    date: 'Jan 2011 - Jan 2016'
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

app.get('/', (req, res)=>{
  res.render('pages/index')
})


// skill page 
app.get('/portfolio',(req, res) =>{
  res.render('pages/portfolio',{portfolios: portfolioList});
});

// about page 
app.get('/about', (req, res) => {
  res.render('pages/about', { works: workingList });
});

app.listen(process.env.PORT || 5000)
