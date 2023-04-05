#!/usr/bin/env node

const fs = require('fs')

var configPath = 'config.js.sample'
var newConfigPath = configPath.replace('.sample', '')

fs.copyFile(configPath, newConfigPath, (err) => {
  if (err) throw err
  console.log(`Copied ${configPath} to ${newConfigPath}`)
})
