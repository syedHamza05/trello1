const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'board',
        required: true
    },
},
{
    
    timestamps: true
})

module.exports = mongoose.model('activity', activitySchema)