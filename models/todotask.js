const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
content: {
    type: String,
    required: true
},
status: {
    type: String, 
    enum: ['todo'],
    default: 'todo',
},
dateCreated: {
    type: Date,
    default: Date.now
},
//require userCreated after user login is implemented
// userCreated: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
// }
})
module.exports = mongoose.model('TodoTask',todoTaskSchema,'tasks');