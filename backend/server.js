import express from 'express'
import bodyParser from 'body-parser'
import crudController from './controllers/CrudController'

var app = express()
app.use(bodyParser.json())
crudController(app)
app.listen(4000)
