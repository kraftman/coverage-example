'use strict';

const fastify = require('fastify')({
  logger: true,
});
const { homeRouter } = require('./routes/create-burger.js');

fastify.register(homeRouter)

module.exports = { fastify }