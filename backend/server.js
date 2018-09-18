const express = require('express')
const bodyParser = require('body-parser')
const crudController = require('./controllers/CrudController')
const fs = require('fs')
const https = require('https')

var key = fs.readFileSync('/etc/letsencrypt/live/shenfeng1945.xyz/privkey.pem','utf8');
var cert = fs.readFileSync('/etc/letsencrypt/live/shenfeng1945.xyz/cert.pem','utf8');
var options = {
    key: key,
    cert: cert
};

var app = express()
app.use(bodyParser.json())
crudController(app)
https.createServer(options,app).listen(4000)
//app.listen(4000)
