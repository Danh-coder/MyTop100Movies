const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    name: {
        type: String, 
        trim: true,
        required: true,
        unique: true
    },
    items: [{
        item: {
            type: mongoose.ObjectId,
            ref: 'Item'
        }     
    }],
    author: {
        type: mongoose.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

const List = mongoose.model('List', listSchema)

module.exports = List