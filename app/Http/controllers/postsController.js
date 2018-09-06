const redis  = require('redis');
const client = redis.createClient();

exports.getAllPosts = (req, res, next) => {

  let return_dataset = []

  client.keys('*', (err, id) => {
    let multi = client.multi()
    let keys = Object.keys(id)
    let i = 0

    keys.forEach( (l) => {
      client.hgetall(id[l], (e, o) => {
        i++
        if (e) {console.log(e)} else {
          temp_data = {'id':id[l],'data':o}
          return_dataset.push(temp_data)
        }

        if (i == keys.length) {
          res.send({posts:return_dataset})
        }
      })
    })
  })
}


exports.createPost = (req, res, next) => {
  
   //get request params
  let id       = req.body.id;
  let title    = req.body.title;
  let contents = req.body.contents;

  // save to redis
  client.hmset(id,[
    'title', title,
    'contents', contents
  ], (err, success) => {
    if (err) {
      console.log(err)  //log error message if theres no error
    }

    console.log(success)  //log success message if successful

    res.send('Post created successfully') // response to the client
  });

}


exports.deletePost = (req, res, next) => {
  // find the id and delete it
  client.del(req.params.id, (err, reply) => {
    if (err) {
      console.log(err)  // callback incase something goes wrong
    }

    console.log(reply)  // log success message
    res.send('Post deleted successfully') // response back to the client
  })
}

exports.getPost = (req, res, next) => {
  
  // id Parameter
  let id = req.params.id;

  // get all values associated with the key as id
  client.hgetall(id, (err, obj) => {
    if (!obj) {
      res.send('Post does not exist') 
    } else {
      obj.id = id

      res.send({
        'Post': obj // if post is found return details
      })
    }
  })
}

exports.updatePost = (req, res, next) => {
  
  // get request params
  let id       = req.body.id;
  let title    = req.body.title;
  let contents = req.body.contents;


  // make id the key and assign the id to the other Parameters
  client.hmset(id, [
     'title', title,
     'contents', contents
  ], (err, reply) => {
    if (err) {
      console.log(err)  // callback to log errors
    }

    console.log(reply)  // log success message
    res.send("Post updated successfully") // response to client
  })
}