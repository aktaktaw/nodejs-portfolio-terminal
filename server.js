
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
    img: '/img/portfolio/ar-vr/merdekaDance.png',
    name: 'Merdeka Dance',
    description: 'Celebrating Malaysia Independence Day in Snapchat with Full Body Tracker',
    tech: 'Snapchat/Lens Studio',
    category: 'Augmented Reality'
  },
  { 
    img: '/img/portfolio/ar-vr/dancing.jpg',
    name: 'Dancing at Home',
    description: 'Things to do during pandemic quarantine',
    tech: 'Snapchat/Lens Studio',
    category: 'Augmented Reality'
  },
  { 
    img: '/img/portfolio/ar-vr/earth-plane.jpg',
    name: 'Space World AR',
    description: 'Create cute earth using plane detection',
    tech: 'Spark AR/ Instagram filter',
    category: 'Augmented Reality'
  },
  { 
    img: '/img/portfolio/ar-vr/eevee.jpg',
    name: 'Pokemon AR',
    description: 'Display AR pokemon in pokemon wallpaper',
    tech: 'Vuforia/ Unity',
    category: 'Augmented Reality'
  },
  { 
    img: '/img/portfolio/ar-vr/eye.jpg',
    name: 'Eye Art',
    description: 'Create a AR Art showcase using plane tracker',
    tech: 'Spark AR/ Instagram filter',
    category: 'Augmented Reality'
  },
  { 
    img: '/img/portfolio/ar-vr/gundam-ar.jpg',
    name: 'Justice Knight AR',
    description: 'Create a gundam showcase to another level',
    tech: 'Spark AR/ Instagram filter',
    category: 'Augmented Reality'
  },
  { 
    img: '/img/portfolio/ar-vr/game-position-filter.jpg',
    name: 'What is in GameDev',
    description: 'Interactive quiz instagram filter for random position in game development',
    tech: 'Spark AR/ Instagram filter',
    category: 'Augmented Reality'
  },
  { 
    img: '/img/portfolio/ar-vr/blink-game.jpg',
    name: 'Simple Blink AR Game',
    description: 'Simple AR Game',
    tech: 'Spark AR/ Instagram filter',
    category: 'Augmented Reality'
  },
  { 
    img: '/img/portfolio/iot/gesture-relay.png',
    name: 'Gesture Control ',
    description: 'Control your relay switch using gesture sensor',
    tech: 'Arduino',
    category: 'IOT'
  },
  { 
    img: '/img/portfolio/iot/unity-arduino.jpg',
    name: 'Uniy and Arduino',
    description: 'Send command from Unity Game to Micro-controller board',
    tech: 'Arduino/ Unity',
    category: 'IOT'
  },
  { 
    img: '/img/portfolio/iot/robot.jpg',
    name: 'Simple Robot using Raspberry PI',
    description: 'Control a simple robot using SSH',
    tech: 'Raspberry PI/ Python',
    category: 'IOT'
  },
  { 
    img: '/img/portfolio/iot/wemos-color.jpg',
    name: 'Wemos Color Detection',
    description: 'A micro-controller board detecting real world color',
    tech: 'Arduino/ Node-RED',
    category: 'IOT'
  },
  { 
    img: '/img/portfolio/iot/node-red.png',
    name: 'Simple Premise Counter',
    description: 'Managing customer allowed to enter the premises or shopping complex',
    tech: 'Raspberry PI/ Node-RED',
    category: 'IOT'
  },
  { 
    img: '/img/portfolio/photography/adele.jpg',
    name: 'Adele Gundam',
    description: 'Action figure photo',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/fv-malaysia-1.jpg',
    name: 'FV Malaysia',
    description: 'FV Malaysia 2015 Event at Sepang International Circuit',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/fv-malaysia-2.jpg',
    name: 'FV Malaysia',
    description: 'FV Malaysia 2015 Event at Sepang International Circuit',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/fv-malaysia-3.jpg',
    name: 'FV Malaysia',
    description: 'FV Malaysia 2015 Event at Sepang International Circuit',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/street-3.jpg',
    name: 'Street Photography',
    description: 'Street Photography at Melaka',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/street-2.jpg',
    name: 'Street Photography',
    description: 'Street Photography at Melaka',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/street-1.jpg',
    name: 'Street Photography',
    description: 'Street Photography at Kuala Lumpur',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/landscape-1.jpg',
    name: 'Sunset Melaka',
    description: 'Street Photography at Melaka',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/landscape-2.jpg',
    name: 'Pantai Puteri',
    description: 'Street Photography at Melaka',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/street-4.jpg',
    name: 'Landscape',
    description: 'Street Photography at Putrajaya',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/jeanne-alter.jpg',
    name: 'Jeanne Alter',
    description: 'Action Figure Photoshoot',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/gilgamesh.jpg',
    name: 'Gilamesh',
    description: 'Action Figure Photoshoot',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/wedding-1.jpg',
    name: 'My Friend Wedding',
    description: 'My friend wedding at Melaka',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/wedding-2.jpg',
    name: 'My Friend Wedding',
    description: 'My friend wedding at Melaka',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/photography/event-utem.jpg',
    name: 'Light Photography',
    description: 'Events in UTeM',
    tech: 'Photgraphy/ Adobe Photoshop',
    category: 'Photography'
  },
  { 
    img: '/img/portfolio/graphic-design/fv-tshirt.jpg',
    name: 'T-Shirt White',
    description: 'T-Shirt for event FV Malaysia 2015  ',
    tech: 'Adobe Photoshop',
    category: 'Graphic Design'
  },
  { 
    img: '/img/portfolio/graphic-design/fv-tshirt2.jpg',
    name: 'T-Shirt Black',
    description: 'T-Shirt for event FV Malaysia 2015  ',
    tech: 'Adobe Photoshop',
    category: 'Graphic Design'
  },
  { 
    img: '/img/portfolio/graphic-design/member-card.png',
    name: 'Member Card Design',
    description: 'Design for club Pembimbing Rakan Siswa  ',
    tech: 'Adobe Photoshop',
    category: 'Graphic Design'
  },
  { 
    img: '/img/portfolio/graphic-design/poster-1.jpg',
    name: 'Photo Montaj FV Malaysia',
    description: 'A3 size print for post-event FV Malaysia 2015',
    tech: 'Adobe Photoshop',
    category: 'Graphic Design'
  },
  { 
    img: '/img/portfolio/graphic-design/poster-3.jpg',
    name: 'Poster',
    description: 'Poster event from Pembimbing Rakan Siswa',
    tech: 'Adobe Photoshop',
    category: 'Graphic Design'
  },
  { 
    img: '/img/portfolio/graphic-design/ajk-tag.jpg',
    name: 'Event Tag Design',
    description: 'Design tag for FV Malaysia 2015',
    tech: 'Adobe Photoshop',
    category: 'Graphic Design'
  },
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
