const express = require('express')
const request = require('request-promise')
const Item = require('../models/item')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/items/:type/:id', auth, async (req, res) => {
    try {
        const item = await Item.store(req.params.id, req.params.type)
        item.ratings = item.ratings.filter((ele) => (!ele.author.equals(req.user._id)))

        item.ratings.push({
            author: req.user._id,
            rating: req.body.rating
        })
        
        await item.save()
        res.send(item)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const options = {
            uri: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
            json: true // Automatically parses the JSON string in the response
        };
    
        const body = await request(options)
        body.results.forEach(async (film) => {
            await Item.store(film.id, film.media_type)
        })        

        res.send(body)
    } catch (err) {
        res.status(500).send()
    }
})

router.get('/items/:type/:id', async (req, res) => {
    try {
        const options = {
            uri: `https://api.themoviedb.org/3/${req.params.type}/${req.params.id}?api_key=${process.env.API_KEY}`,
            json: true // Automatically parses the JSON string in the response
        };
    
        const body = await request(options)
        await Item.store(req.params.id, req.params.type)

        res.send(body) 
    } catch (err) {
        res.status(404).send({ error: err.message })
    }
})

router.delete('/items/:type/:id', auth, async (req, res) => {
    try {
        let item = await Item.findOne({
            media_id: req.params.id,
            media_type: req.params.type
        })
        
        if (!item) throw new Error('Item is not available or you have not rated yet')

        item.ratings = item.ratings.filter((ele) => (!ele.author.equals(req.user._id)))
        await item.save()

        res.send(item)
    } catch (err) {
        res.status(404).send({ error: err.message })
    }
})

module.exports = router
