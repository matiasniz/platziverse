'use strict'

const debug = require('debug')('platziverse:db:setup')
const db = require('./index.js')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'platziverse',
    username: process.env.DB_USER || 'platzi',
    password: process.env.DB_PASS || 'platzi',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    loggin: s => debug(s),
    setup: true
  }

  await db(config).catch(handaleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handaleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()
