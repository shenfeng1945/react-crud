import React,{Component} from 'react'
import classnames from 'classnames'

class GameForm extends Component {
    state = {
        title:'',
        cover:'',
        errors: {}
    }
    handleChange(e){
        if(this.state.errors[e.target.name]){
            let errors = Object.assign({},this.state.errors)
            delete errors[e.target.name]
            this.setState({[e.target.name]:e.target.value,errors})
        }else{
           this.setState({[e.target.name]:e.target.value})
        }
    }
    handleSubmit(e){
       e.preventDefault();
       let errors = {}
       if(this.state.title === ''){
           errors.title = "Can't be empty"
       } 
       if(this.state.cover === ''){
           errors.cover = "Can't be empty"
       } 
       this.setState({errors})
    }
    render(){
        return(
            <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
             <h1>Add new game</h1> 
             <div className={classnames('field',{error: !!this.state.errors.title})}>
               <label htmlFor="title">Title</label>
               <input type="text" name="title" 
                      onChange={this.handleChange.bind(this)}
                      value={this.state.title}/>
               {this.state.errors.title}
             </div>
             <div className={classnames('field',{error: !!this.state.errors.cover})}>
               <label htmlFor="title">Cover Url</label>
               <input type="text" name="cover" 
                      onChange={this.handleChange.bind(this)}
                      value={this.state.cover}/>
               {this.state.errors.cover}
             </div>
             <div className="field">
             {
                 this.state.cover !== ''&&
                 <img src={this.state.cover} alt="cover" className="ul small bordered image"/> 
             }
             </div>
             <div className="field">
              <button className="ui primary button">Save</button> 
             </div>
            </form>
        )
    }
}
export default GameForm