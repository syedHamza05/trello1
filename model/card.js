const mongoose = require('mongoose')


const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    listId: {
        type: Schema.Types.ObjectId,
        ref: 'list',
        required: true
    },
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'board',
        required: true
    },
    textField: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('card', cardSchema)