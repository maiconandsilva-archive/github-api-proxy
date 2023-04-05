const express = require('express')
const { request, createCustomRequest } = require('../utils/request')

const router = express.Router()

router.get('/', request)
router.get('/:username/repos', request)
router.get('/:username/details', createCustomRequest('/users/:username'))

module.exports = router
