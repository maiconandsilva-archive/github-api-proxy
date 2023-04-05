#!/usr/bin/env node

const { appConf } = require('./config')
const swaggerAutogen = require('swagger-autogen')()

// Generate swagger.json file
const endpointsFiles = ['./app.js']

swaggerAutogen(appConf.SWAGGER_FILE,
    endpointsFiles, appConf.swaggerAutogenConf).then(async () => {
  await import('./app.js') // Your express api project's root file where the server starts
})
