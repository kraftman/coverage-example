'use strict';

const fastify = require('fastify')({
  logger: true,
});
const { homeRouter } = require('./routes/home.js');

fastify.register(homeRouter)

module.exports = { fastify }