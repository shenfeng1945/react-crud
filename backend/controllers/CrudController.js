const mongoose = require('mongoose');

mongoose.connect('mongodb://shenfeng1945:shenfeng1945@ds249428.mlab.com:49428/crud')
var todoSchema = new mongoose.Schema({
   title: String,
   cover: String
});
var Crud = mongoose.model('crud', todoSchema);
const validdata = (data) =>{
    let errors = {}
    if(data.title === ''){
        errors.title = "Can't be empty"
    } 
    if(data.cover === ''){
        errors.cover = "Can't be empty"
    } 
    const isValid = Object.keys(errors).length===0
    return {errors,isValid}
}

module.exports = function(app) {
    app.get('/api/games', (req, res)=>{
       Crud.find({},(err,games)=>{
          res.json({games})
       })
    });
  
    app.get('/api/game/:id', (req, res)=>{
       Crud.findById({_id:req.params.id},(err,game)=>{
           res.json({game})
       }) 
    });
  
    app.delete('/api/games/:id', (req, res)=>{
        Crud.find({_id:req.params.id}).remove((err,_)=>{
            if(err){
                res.status(500).json({errors:{global:err}});
                return
            }else{
                res.json({})
            }
        })
    });
    app.put('/api/games/:id',(req,res)=>{
        const {errors,isValid} = validdata(req.body)
        if(isValid){
            const {title,cover} = req.body
            Crud.find({_id:req.params.id}).update({title,cover},(err,result)=>{
                if(err){
                    res.status(500).json({errors:{global:err}});
                    return
                }else{
                    res.json({game:result.value})
                }
            })
        }else{
            res.status(400).json({
                errors
            })
        }
    })
    app.post('/api/games',(req,res)=>{
        Crud(req.body).save((err,data)=>{
            if(err) throw err;
            res.json(data)
        })
    })
    app.use((req,res)=>{
        res.status(404).json({
            errors: {
                global: 'Still working on it. Please try again later than when we implement it.'
            }
        })
    })
  }
