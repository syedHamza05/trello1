const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // userId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'user',
    // },
    // img:{
    //     data: Buffer,
    //     contentType: String
    // }
// },
// {
    // timestamps: true
})

const Board = mongoose.model('board', boardSchema)

module.exports = Board