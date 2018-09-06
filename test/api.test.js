const request = require('supertest');
const app     = require('../index');

// describe("post/:id", () => {
// 	it("Finds a post with the specified id", (done) => {
//       request(app).get("post/1")
//       .expect(200)
//       .expect(/Post found/, done)
// 	})
// })
describe("Create Posts", () => {
	it("creates a new post", (done) => {
      request(app).post("post/create")
      .send({ id: 1, title: "new title", contents: "new content"})
      .expect(200)
      .expect('Post created successfully', done)
	})
})