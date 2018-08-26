import express from 'express'
import mongodb from 'mongodb'

const app = express()
const dbUrl = 'mongodb://localhost'
mongodb.MongoClient.connect(dbUrl,(err,client)=>{
    if(err) throw err;
    const db = client.db('react-crud')
    app.get('/api/games',(req,res)=>{
        db.collection('games').find({}).toArray((err,games)=>{
            res.json({games})
        })
    })
    app.use((req,res)=>{
        res.status(404).json({
            errors: {
                global: 'Still working on it. Please try again later than when we implement it.'
            }
        })
    })
    app.listen('8080',()=>{console.log('server is running on localhost:8080')})
})
