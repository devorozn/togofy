const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const playlistSchema = new Schema({
  id: String,
  idNew: String,
  idUser: String,
  dateCreate:{ type: Date, default: Date.now },
  status:String
});
module.exports = mongoose.model('playlist', playlistSchema);