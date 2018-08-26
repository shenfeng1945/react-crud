import React, { Component } from 'react';
import {connect} from 'react-redux'
import GamesList from './GamesList'
import {fetchGames} from '../actions'

class GamesPage extends Component {
  componentDidMount(){
    console.log(this.props.fetchGames())
  }
  render() {
    return (
      <div>
        <GamesList games={this.props.games}></GamesList>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
   return {
     games: state.games
   }
}
export default connect(mapStateToProps,{fetchGames})(GamesPage);