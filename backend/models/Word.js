const mongoose = require("mongoose");

// define the schema
const WordSchema = new mongoose.Schema({
  _id: String,
  word: String,
});

// define the model
const Word = mongoose.model("Word", WordSchema);
module.exports = { Word, WordSchema };
