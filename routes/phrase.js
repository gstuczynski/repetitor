var express = require('express');
var router = express.Router();
//linkuje schemat odpowiadajacy 1 wpisowi
var Phrase = require('../models/phrase');

//zwraca wszystkie pozycje
router.get('/', function(req,res){
  Phrase.find(function(err, phraselist){
    if(err){
      res.send(err);
    }else{
      res.json(phraselist);
    }
  })//pharse.find
});//router.get

//do tej metody przekazywany bedzie json, na podstawie jsona
//tworzony bedzie obiekt phrase i wrzucany do bazy
router.post('/', function(req,res){
  var phrase = new Phrase();
  phrase.engVersion = req.body.engVersion;
  phrase.plVersion = req.body.plVersion;
  phrase.description = req.body.description;

  phrase.save(function(err){
    if(err){
      res.send(err);
    }else{
      res.json({message:"Pharse added"})
    }
  })
})//router.post()

/*
router.delete('/:id', function(req,res){
  Phrase.find(function(err, phraselist){
    if(err){
      res.send(err);
    }else{
      res.json(phraselist);
    }
  })//pharse.find
});
*/




module.exports = router;
