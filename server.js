const express = require('express')
const app = express()

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.send('')
})

app.get('/greet/:name', function (req, res) {
  res.send(randomGreeting + " " + req.params.name);
})

app.listen(process.env.PORT || 8080 , function () {
  console.log('Example app listening on  port 8080!')
})


function randomGreeting(){
    var greetings = ["Greetings", "Hello", "Salutations", "Hi", "Good day" ];

    var random = Math.floor(Math.random()*(greetings.length+1));
    
    return greeting[random];
    
}