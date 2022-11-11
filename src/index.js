const express = require('express')
const request = require('request-promise')
require('./db/mongoose')
const userRouter = require('./routers/user')
const listRouter = require('./routers/list')
const itemRouter = require('./routers/item')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(listRouter)
app.use(itemRouter)

app.listen(process.env.PORT, () => {
    console.log('App is listening to port', process.env.PORT);
})