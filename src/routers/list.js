const express = require('express')
const List = require('../models/list')
const Item = require('../models/item')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/me/lists', auth, async (req, res) => {
    try {
        const list = new List(req.body)
        list.author = req.user._id

        await list.save()
        res.send(list)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})

router.post('/me/lists/:id', auth, async (req, res) => {
    try {
        const list = await List.findById(req.params.id)
        if (!list) throw new Error()

        for (let item of req.body.items) {
            try {
                item = await Item.store(item.media_id, item.media_type)
            } catch (e) { continue }

            if (list.items.filter((listItem) => listItem.item.equals(item._id)).length > 0) continue

            list.items.push({ item: item._id }) 
        }

        await list.save()
        res.send(list)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})

router.get('/me/lists', auth, async (req, res) => {
    try {
        const lists = await List.find({ author: req.user._id })
        res.send(lists)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.get('/:userId/lists', async (req, res) => {
    try {
        const lists = await List.find({ author: req.params.userId })
        if (!lists) return res.status(404).send()

        res.send(lists)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.get('/me/lists/:id', auth, async (req, res) => {
    try {
        const list = await List.findOne({ _id: req.params.id, author: req.user._id }).populate('items.item')
        if (!list) return res.status(404).send()

        res.send(list)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.get('/:userId/lists/:id', async (req, res) => {
    try {
        const list = await List.findOne({ _id: req.params.id, author: req.params.userId }).populate('items.item')
        if (!list) return res.status(404).send()

        res.send(list)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.patch('/me/lists/:id', auth, async (req, res) => {
    try {
        const validKeys = ['name']
        const bodyKeys = Object.keys(req.body)
    
        bodyKeys.map((key) => {
            if (!validKeys.includes(key)) throw new Error(`${key} is not a proper field`)
        })   

        const list = await List.findOneAndUpdate({
            _id: req.params.id,
            author: req.user._id
        }, req.body, { new: true })

        if (!list) throw new Error('List does not exist')
        res.send(list)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})

router.delete('/me/lists/:id', auth, async (req, res) => {
    try {
        const { deletedCount } = await List.deleteOne({ _id: req.params.id })   
        if (!deletedCount) throw new Error()

        res.send()
    } catch (err) {
        res.status(404).send()
    }
})

module.exports = router