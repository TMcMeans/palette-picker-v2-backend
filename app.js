const express = require('express');
const bodyParser = require('body-parser');

//initialize express server
const app = express();

//set server port and title
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Palette Picker v2';

//Use bodyParser middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  })
);

//Listen on PORT 3000
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on port ${app.get('port')}`);
});

module.exports = app;
