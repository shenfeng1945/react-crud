import React, { Component } from 'react';
import {connect} from 'react-redux'
import GamesList from './GamesList'
import {fetchGames,deleteGame} from '../actions'

class GamesPage extends Component {
  componentDidMount(){
    this.props.fetchGames()
  }
  render() {
    return (
      <div>
        <GamesList games={this.props.games} deleteGame={this.props.deleteGame}></GamesList>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
   return {
     games: state.games
   }
}
//将action的方法通过connect,附在this.props上面，GamesPage可以拿到，并调用。
//调用成功后返回一个带type的对象,通过dispatch传给reducer，返回store,通过mapStateToProps拿到这个state。
//然后进行ui渲染。
export default connect(mapStateToProps,{fetchGames,deleteGame})(GamesPage);