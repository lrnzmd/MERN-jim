require('dotenv').config()

const express = require('express')

const workputRouters = require('./routes/workouts')

const app = express()


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json({mssg: 'welcome here'})
})

app.use('/api/workout', workputRouters )

//listen 
app.listen(process.env.PORT, (req, res) => {
    console.log("listen in port ", process.env.PORT)
})

