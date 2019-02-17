'use strict'
const chai = require('chai');
chai.should();

const { fastify } = require('../src/index.js');

const createFakeBurger = () => ({
  name: 'cheesburger',
  description: 'Tasty!',
  meatScore: 8,
  bunScore: 6,
  date: new Date(),
})

describe('Burger creation', () => {
  it('should create a burger', async () => {
    const fakeBurger = createFakeBurger()
    const result = await fastify.inject({
      method: 'POST',
      url: '/burger',
      payload: fakeBurger,
    })
  })
})