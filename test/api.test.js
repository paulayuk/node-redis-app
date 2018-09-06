const chai     = require('chai');
const expect   = require('chai').expect;
const chaiHttp = require('chai-http');

const app = require('../index');

chai.use(chaiHttp);

let data = { id:1, title : "First Title", contents : "This is a test content" };

it('should return a "Welcome to the BlogPost API built with node and redis" ', function(done) {
 chai.request(app)
        .get('/')
        .end(function(err, res) {
          expect(res.text).to.equal('Welcome to the BlogPost API built with node and redis');
          done();
        });
});

it('should return a newly created post object', function(done) {
  
 chai.request(app)
        .post('/post/create')
        .send(data)
        .end(function(err, res) {
          expect(res.text).to.equal('Post created successfully');
          done();
        });
});




it('should update the previously created post', function(done) {
  chai.request(app)
        .put('/post/update/'+data.id)
        .send(data)
        .end(function(err, res) {
          //console.log(res);
          expect(res.text).to.equal("Post updated successfully");
          done();
        });
});



it('should delete a post', function(done) {
 chai.request(app)
        .delete('/post/delete/'+data.id)
        .end(function(err, res) {
          expect(res.text).to.equal('Post deleted successfully');
          done();
        });
});

