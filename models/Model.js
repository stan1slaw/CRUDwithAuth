const mongoose = require('mongoose'),
Schema = mongoose.Schema;

let Posts = new Schema({
    title_name: {
        type: String
      },
      text_name: {
        type: String,
        maxlength: 200
    }
},{
    collection: 'posts'
});
module.exports = mongoose.model('Posts', Posts);