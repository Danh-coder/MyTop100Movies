const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const List = require('./list')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        default: 'Anonymous',
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(v) {
            return validator.isEmail(v)
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id}, process.env.SECRET_KEY)

    user.tokens.push({ token })
    await user.save()

    return token
}

userSchema.methods.toJSON = function() {
    const user = this.toObject()

    delete user.password
    delete user.tokens

    return user
}

userSchema.pre('save', async function(next) {
    const user = this
    if (user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 10)

    next()
})

userSchema.pre('remove', async function(next) {
    const user = this
    await List.deleteMany({ author: user._id })

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User