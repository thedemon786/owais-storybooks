const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
ID: {
    type: String
},
email: {
    type: String,
    required: true
},
firstName: {
    type: String
},
lastName: {
    type: String
},
image: {
    type: String
}
});

//create collection and add schema
mongoose.model('users', UserSchema);
