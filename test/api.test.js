const request = require('supertest');
const app     = require('../index');

describe("post/:id", () => {
	it("Finds a post with the specified id", (done) => {
      request(app).get("post/1")
      .expect(200)
      .expect(/Post found/, done)
	})
})
describe("post/create", () => {
	it("Finds a post with the specified id", (done) => {
      request(app).get("post/1")
      .expect(200)
      .expect(/Post found/, done)
	})
})