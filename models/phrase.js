mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhraseSchema = new Schema({
  engVersion:{type: String, required: true},
  plVersion: {type: String, required: true},
  description: String,
  date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Phrase', PhraseSchema);
