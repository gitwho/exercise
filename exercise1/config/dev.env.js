'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const axios = require('axios')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // base_api: '"http://localhost:8082"'
})

const service = axios.create({
  baseUrl: process.env.base_api,
  timeout: 5000
})
