const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const newsSchema = new Schema({
  id: String,
  title: String,
  body: String,
  //dateCreate:String,
  dateCreate:{ type: Date, default: Date.now },
  dateUpdate:{ type: Date, default: Date.now },
  userCreate:String,
  status:String
});
module.exports = mongoose.model('news', newsSchema);