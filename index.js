import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars';

// Create a variable to hold the app root folder
const root = path.resolve();

const app = express()

const hbs = handlebars.create({
  // Make the default base layout views/layouts/main.hbs
  defaultLayout: 'main',
  // Look for handlebars templates in 'hbs' files
  extname: '.hbs'
});

// Define Handlebars as our template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Allow the webserver to serve static assets from '/assets'
app.use('/assets', express.static(path.join(root, 'static')));

// Create a route at '/' that will render the 'index' view with
// the default layout
app.get('/', (req, res) => {
  res.render('index');
});

// Start the webserver
const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
