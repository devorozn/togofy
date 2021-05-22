const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.set('useFindAndModify', false);
mongoose.connect(mongodb.URI, {
  useNewUrlParser: true
})
  .then(db => console.log(' Togofy Data-Base connected...'))
  .catch(err => console.log(err));
