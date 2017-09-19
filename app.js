const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('public'))

app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', function (err, output) {
// console.log(output);
// });


var server = app.listen(3000, function () {
    console.log('server is listening on port 3000');
});

var io = socketio.listen(server);

app.use('/', routes(io));

