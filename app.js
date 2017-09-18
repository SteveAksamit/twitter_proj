const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
var locals = {
  title: 'An Example',
  people: [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermione' }
  ]
};
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.use(morgan('dev'));

app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  console.log(output);
});


app.get('/', function (req, res, next) {
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.get('/news', function (req, res, next) {
  res.send('You got to the news page');
});

app.listen(3000, function () {
  console.log('server is listening on port 3000');
});
