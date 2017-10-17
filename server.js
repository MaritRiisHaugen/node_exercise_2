const express = require('express')
const app = express()

app.use(express.static('public'))


/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})



var greetings = ["Greetings", "Hello", "Salutations", "Hi", "Good day" ];

var random = Math.floor(Math.random()*(greetings.length+1));

var name = [" Christian"];

app.get('/greet', function (req, res) {
  res.send(greetings[random] + " " + name[0]);
})