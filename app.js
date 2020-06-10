
// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');
// Initialize express
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));



// require handlebars
var exphbs = require('express-handlebars');

// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Use handlebars to render
app.set('view engine', 'handlebars');

// Tell our app to send the "hello world" message to our home page
// Render the "home" layout for the main page and send the following msg
// app.get('/', (req, res) => {
//     res.render('home', { msg: 'Handlebars are Cool!' });
//   })

// OUR MOCK ARRAY OF PROJECTS
var events = [
    { title: "I am your first event", desc: "A great event that is super fun to look at and good", imgUrl: "https://3milliondogs.com/blog-assets-two/2015/08/admin-ajax-7.jpeg" },
    { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://3milliondogs.com/blog-assets-two/2015/08/admin-ajax-7.jpeg" },
    { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://3milliondogs.com/blog-assets-two/2015/08/admin-ajax-7.jpeg " }
  ]
  
// INDEX
app.get('/', (req, res) => {
  res.render('events-index', { events: events });
})

// NEW
app.get('/events/new', (req, res) => {
  res.render('events-new', {});
})

// CREATE
app.post('/events', (req, res) => {
  console.log(req.body);
})
// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})   