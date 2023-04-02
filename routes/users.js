const express = require('express');
const request = require('../utils/request');

const router = express.Router();

router.get('/', request.request);
router.get('/:username/repos', request.request);
router.get('/:username/details', request.createCustomRequest('/users/:username'));

module.exports = router;
