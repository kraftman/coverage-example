const expressApp = require('../../src/express/index.js');
const request = require('supertest');
const chai = require('chai');
chai.should();

describe('express e2e test', () => {
  it('returns the passed in name', async () => {
    const name = 'chris';
    const result = await request(expressApp)
    .get('/?name='+name)
    .expect(200)
    result.text.should.contain(name)
  })
})