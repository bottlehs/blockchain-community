const request = require('supertest');
const app = require('../../server');

describe('Go Fit Server API TEST', () => {
  test('should test that true === true', () => {
    expect(true).toBe(true)
  })

  test('API Call Test', async (done) => {
    const response = await request(app)
    .post('/api/users').send({
      userId: 1,
      title: 'test is cool',
    })
    expect(response.status).toEqual(200)
  })
})