const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')
const { appConf } = require('../config')


router.use('/', (req, res, next) => {
    swaggerDocument.host = req.get('host')
    swaggerDocument.basePath = appConf.API_BASE_PATH
    req.swaggerDoc = swaggerDocument
    next()
})

router.use('/', swaggerUi.serveFiles(swaggerDocument, {}))
router.get('/', swaggerUi.setup(swaggerDocument))

module.exports = router
