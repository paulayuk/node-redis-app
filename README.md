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

## Getting Started

- Clone this repo
```
git clone https://github.com/paulayuk/node-redis-app.git

```
- change directory into the newly cloned repo
```
cd node-redis-app

```
- Install required node.js libraries
```
npm install

```
* copy the contents of .env.example to .env
```
cp .env.example .env
```

- serve the application

```
npm start

```
## You can now visit http://localhost:4000
```
 N/B: If you don't configure your .env file your app will default to port 3000 and would be live at http://localhost:3000.
```
# Testing the API

## Parameters

The API expects the following Parameters: </br>
`id` of type int </br>
`title` of type string </br>
`contents` of type string </br>


## Using Postman you can test this [endpoints](https://github.com/paulayuk/node-redis-app/blob/master/routes/api.js) 

Make sure post is set to `x-www-form-urlencoded`
* get all posts (GET): `/posts`
* get one post (GET): `/post/{id}`
* create a new post (POST): `/post/create`
* delete a post (DELETE): `/post/delete/{id}`
* update a post (PUT): `/post/update/{id}`






