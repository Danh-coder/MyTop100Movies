const mongoose = require('mongoose')
const request = require('request-promise');

const itemSchema = new mongoose.Schema({
    media_type: {
        type: String,
        required: true
    },
    media_id: {
        type: String,
        required: true
    },
    ratings: [{
        author: {
            type: mongoose.ObjectId,
            required: true,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        }
    }]
})

itemSchema.pre('save', async function(next) {
    try {
        const item = this
        const options = {
            uri: `https://api.themoviedb.org/3/${item.media_type}/${item.media_id}?api_key=${process.env.API_KEY}`,
            json: true // Automatically parses the JSON string in the response
        };

        await request(options)    
        next()
    } catch (err) {
        next(new Error(err))
    }
})

itemSchema.statics.store = async function(media_id, media_type) {
    const Item = this
    const obj = {
        media_id,
        media_type
    }
    let item = await Item.findOne(obj)

    if (!item) item = new Item(obj)
    await item.save()
    
    return item
}

const Item = mongoose.model('Item', itemSchema)

module.exports = Item