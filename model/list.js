const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    boardId: {
        type: mongoose.Types.ObjectId,
        ref: 'board',
        required: true
    },
    order: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('list', listSchema)