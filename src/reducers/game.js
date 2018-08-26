import {SET_GAMES} from '../constants'
export default (state = [], action={}) => {
  switch (action.type) {
  case SET_GAMES:
    return action.games
  default:
    return state
  }
}
