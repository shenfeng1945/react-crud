import React, { Component } from 'react';
import {connect} from 'react-redux'
import GamesList from './GamesList'
import {fetchGames,deleteGame} from '../actions'

class GamesPage extends Component {
  componentDidMount(){
    console.log(this.props.fetchGames())
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
export default connect(mapStateToProps,{fetchGames,deleteGame})(GamesPage);