var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var phrase = require('./routes/phrase');

var mongoose = require('mongoose');

var app = express();
//lacze sie z baza danych
mongoose.connect('mongodb://localhost:27017/repetitor', function(err){
  if(err){
    throw err;
  }
});
//kontrola przeplywu polaczenia z db
mongoose.connection.on('connected', function(){
  console.log("db connected");
});

mongoose.connection.on('disconnect', function(){
  console.log('db connection broken');
});
//zamykam polaczenie z baza gdy proces node sie zakonczy
//sigint - klawisz przerwania
process.on('SIGINT', function(event) {
  mongoose.connection.close(function(){
    console.log("close db connection");
    procces.exit(0);
  })
})


//ustawiam silnik widoku - wskazuje na katalog views i silnik szblonu ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//ustawiam statyczny folder dla frontu
app.use(express.static(path.join(__dirname,'client')));

//ustawiam body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expended: false}));


app.use('/', index);
app.use('/api', tasks);
app.use('/phrase', phrase);

app.listen(3000, function(){
  console.log('Server started on port 3000');
});
