const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use(morgan('dev'));

app.use(express.static('public'))

app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', function (err, output) {
// console.log(output);
// });

app.use('/', routes);

app.listen(3000, function () {
  console.log('server is listening on port 3000');
});
