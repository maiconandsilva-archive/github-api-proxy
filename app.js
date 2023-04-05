const express = require('express')
const path = require('path')
const logger = require('morgan')
const cors = require('cors')
const usersRouter = require('./routes/users')
const swaggerRouter = require('./routes/swagger')
const { request } = require('./utils/request')
const { appConf } = require('./config')

const app = express()
const api = new express.Router()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(appConf.API_BASE_PATH, api)

api.use(cors())
api.use('/docs', swaggerRouter)
api.use('/users', usersRouter)
// api.use(request) // Relay to Github (beware of rate limits when using this)


const redirectToSwaggerDocs = async (req, res) => res.redirect('/api/docs')

api.use('/', redirectToSwaggerDocs)
app.use('/', redirectToSwaggerDocs)

module.exports = app
