const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()

        const token = await user.generateAuthToken()

        res.send({ user, token })
    } catch (err) {
        res.status(400).send({ error: err.message })
    }    
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })   
        if (!user) throw new Error('Your email or password is incorrect')

        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error('Your email or password is incorrect')

        const token = await user.generateAuthToken()

        res.send({ user, token })
    } catch (err) {
        res.status(404).send({ error: err.message })
    }    
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(({token}) => token !== req.token)   
        await req.user.save()

        res.send()
    } catch (err) {
        res.status(500).send({ error: err.message})
    }    
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try { 
        req.user.tokens = []
        await req.user.save()   
        res.send()
    } catch (err) {
        res.status(500).send({ error: err.message})
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) throw new Error()
        res.send(user)
    } catch (err) {
        res.status(404).send()
    }
})

router.patch('/users/me', auth, async (req, res) => {
    try {
        const allowedKeys = ['username', 'email', 'password']
        const bodyKeys = Object.keys(req.body)
    
        for (key of bodyKeys) {
            if (!allowedKeys.includes(key)) {
                throw new Error(`${key} is not a proper field`)
            }
        }
    
        for (key of bodyKeys) {
            req.user[key] = req.body[key]
        }
        await req.user.save()

        res.send(req.user)
    } catch (err) { 
        res.status(400).send({ error: err.message })
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

module.exports = router