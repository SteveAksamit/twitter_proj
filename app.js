const express = require('express');
const app = express();
const morgan = require('morgan')


app.use(morgan('dev'))

app.get( '/', function(req, res, next){
  res.send("You got to the home page")
})

app.get( '/news', function(req, res, next){
  res.send("You got to the news page")
})

app.listen(3000, function(){
  console.log("server is listening on port 3000");
});
