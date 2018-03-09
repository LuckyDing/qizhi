const path = require('path')
const jsonServer = require('json-server')
const ip = require('ip').address()
const db = require('./db')

const server = jsonServer.create()
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()


server.use(middlewares)
server.use(router)
server.listen({
    host: "localhost",
    port: 9090
}, function() {
    console.log(`JSON Server is running in http://${ip}:9090`)
})
