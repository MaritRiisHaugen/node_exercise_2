const express = require('express')
const app = express()

//app.use(express.static(__dirname, + 'public'));
app.use(express.static('public'));


/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

function randomGreeting(){
    var greetings = ["Greetings", "Hello", "Salutations", "Hi", "Good day" ];

    var random = Math.floor(Math.random()*(greetings.length+1));
    
    return greeting[random];
    
}


app.get('/greet/:name', function (req, res) {
  res.send(randomGreeting + " " + requst.params.name);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
