const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    img:{
        data: Buffer,
        contentType: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('board', boardSchema)