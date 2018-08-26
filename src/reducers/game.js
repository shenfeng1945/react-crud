import {SET_GAMES,ADD_GAME,GAME_FETCH} from '../constants'
export default (state = [], action={}) => {
  switch (action.type) {
  case SET_GAMES:
    return action.games
  case ADD_GAME:
    return [
      ...state,
      action.game
    ]
  case GAME_FETCH:
    const index = state.findIndex(item=>item._id === action.game._id)
    if(index>-1){
       return state.map(item=>{
         if(item._id === action.game._id)return action.game
         return item
       })
    }else{
      return [
        ...state,
        action.game
      ]
    }
  default:
    return state
  }
}
