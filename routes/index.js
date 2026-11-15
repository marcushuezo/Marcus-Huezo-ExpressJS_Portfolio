const projects = [
  {
    title: 'CryptoMine Network',
    context: 'Intro to Networking 2',
    description: 'I built a simulated network connecting Chicago, Toronto, Vancouver and Mexico using six routers and nine switches. I configured VLANs, routing and DNS, tested connectivity between offices and used SSH for secure remote management.'
  },
  {
    title: 'Client Loyalty During Market Volatility',
    context: 'AGF Investments internship',
    description: 'I researched how other industries support clients during difficult periods. I recommended timely updates, regular follow-ups and videos featuring analysts discussing their sectors.'
  },
  {
    title: 'Wordie',
    context: 'Intro to Programming for IT',
    description: 'My group built a Python game that gives players six tries to guess a five-letter word. It shows guesses on a digital keyboard, reveals the word and its definition, and tracks wins, losses and streaks.'
  },
  {
    title: 'Car Rental System',
    context: 'Object-Oriented Programming',
    description: 'I worked on a Python system that manages vehicles, customers, rentals and returns. It uses classes and inheritance to calculate fees and saves customer, vehicle and rental data in CSV files.'
  }
];

const travel = [
  { city: 'Paris', image: 'Paris.jpeg', alt: 'The Eiffel Tower viewed from Trocadero' },
  { city: 'Barcelona', image: 'Spain.jpeg', alt: 'The Sagrada Família in Barcelona' },
  { city: 'New York', image: 'New york.jpeg', alt: 'The Manhattan skyline' }
];

module.exports = function (app) {
  app.get('/', function (req, res, next) {
    res.render('layout', { title: 'Home', page: 'index' });
  });

  app.get('/about', function (req, res, next) {
    res.render('layout', { title: 'About Me', page: 'about', travel: travel });
  });

  app.get('/projects', function (req, res, next) {
    res.render('layout', { title: 'Projects', page: 'projects', projects: projects });
  });

  app.get('/contact', function (req, res, next) {
    res.render('layout', { title: 'Contact Me', page: 'contact' });
  });
};