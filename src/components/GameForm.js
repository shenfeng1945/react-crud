import React,{Component} from 'react'
import classnames from 'classnames'




class GameForm extends Component {
    state = {
        _id: this.props.game?this.props.game._id:null,
        title:this.props.game?this.props.game.title:'',
        cover:this.props.game?this.props.game.cover:'',
        errors: {},
        loading: false,
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
    
    //数据请求是异步的
    componentWillReceiveProps(nextProps){
       this.setState({
         _id: nextProps.game._id,
         title: nextProps.game.title,
         cover: nextProps.game.cover
       })
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
       const isValid = Object.keys(errors).length===0
       if(isValid){
          let {_id,title,cover} = this.state
          this.setState({loading:true})
          this.props.saveGame({_id,title,cover})
              .catch(
                (err)=>err.response.json().then(({errors})=>this.setState({errors,loading:false}))
              )
       }
    }
    render(){
        const form = (
            <form className={classnames('ui','form',{loading: this.state.loading})} onSubmit={this.handleSubmit.bind(this)}>
            <h1>
               {this.props.match.params._id?'Edit game':'Add new game'}
            </h1> 
            {!!this.state.errors.global && 
               <div className="ui negative message">{this.state.errors.global}</div>
            }
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
        return(
          <div>
             {form}
          </div>
        )
    }
}
export default GameForm