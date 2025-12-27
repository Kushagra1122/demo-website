const request = require('supertest');
const app = require('../index');

describe('Demo Website Tests', () => {
  test('should respond to GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello from Auto-Deployed Website');
  });

  test('should have correct content type', async () => {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).toMatch(/text\/html/);
  });

  test('should return 404 for non-existent routes', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});

