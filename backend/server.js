import express from 'express'
import bodyParser from 'body-parser'
import crudController from './controllers/CrudController'
import cors from 'cors'
//const fs = require('fs')
//const https = require('https')

//var key = fs.readFileSync('hacksparrow-key.pem','utf8');
//var cert = fs.readFileSync('hacksparrow-cert.pem','utf8');
//var options = {
//    key: key,
//    cert: cert
//};

var app = express()
app.use(bodyParser.json())
app.use(cors())
crudController(app)
//https.createServer(options,app).listen(4000)
app.listen(4000)
