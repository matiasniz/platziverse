'use strict'

const Sequelize = require('sequelize')
const setupdDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupdDatabase(config)

  return sequelize.define('metric', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
