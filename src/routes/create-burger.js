'use strict';

const Redis = require('ioredis');
const redis = new Redis();
const uuidv4 = require('uuid/v4')

const homeRouter = async (fastify) => {
  fastify.post('/burger', async (req, res) => {
    const burger = req.body;
    const burgerData = {
      totalScore: burger.meatScore + burger.bunScore,
      meatScore: burger.meatScore,
      bunScore: burger.bunScore,
      id: uuidv4()
    }
    const pipeline = redis.pipeline();
    pipeline.hset({burgerData});
    pipeline.zadd(burgerData.totalScore, burgerData.id);
    await pipeline.exec();
    return res
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ hello: 'world' })
  })
}

module.exports = { homeRouter }