# node-redis-app 

## NodeJS Installation
You can install NodeJS on your OS from their [official download page](https://nodejs.org/en/download/current/).

## Redis Installation

### Mac
you can install redis uning [homebrew](http://brew.sh).

run `brew install redis` in terminal to install redis on your mac using homebrew, assuming you have homebrew installed.

or on your terminal by following this [commands](https://redis.io/download)
### Linux

You can install redis on Linux by following the commands [here](https://redis.io/download)

### Windows

You can install redis on Windows by following the instructions [here](https://redislabs.com/ebook/appendix-a/a-3-installing-on-windows/a-3-2-installing-redis-on-window/)

## Set up

* clone the repo
* cd node-redis-app
* run `npm install`
* copy the contents of .env.example to .env
* run `npm start`

## Api test

Using your preferred API test client send requests to the endpoints found [here](https://github.com/paulayuk/node-redis-app/blob/master/routes/api.js)

```
E.G to get all posts visit
  http://localhost:4000/posts

```

