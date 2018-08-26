import {SET_GAMES,ADD_GAME,GAME_FETCH} from '../constants'
const setGames = (games)=>{
    return {
        type: SET_GAMES,
        games
    }
}
const handleResponse = (res)=>{
  if(res.ok){
      return res.json()
  }else{
      let error = new Error(res.statusText)
      error.response = res
      throw error;
  }
}
export const fetchGames = ()=>{
    return dispatch=>{
       fetch('/api/games')
        .then(res=>res.json())
        .then(data=>dispatch(setGames(data.games)))
    }
}
const addGame = (game) =>{
   return {
       type: ADD_GAME,
       game,
   } 
}
const gameFetched = (game)=>{
    return {
        type: GAME_FETCH,
        game,
    }
}
export const saveGame = (data) =>{
    return dispatch =>{
      return fetch('/api/games',{
          method: 'post',
          body: JSON.stringify(data),
          headers: {
              'Content-Type':'application/json'
          }
       }).then(handleResponse)
         .then(data=>dispatch(addGame(data.game)))
    }
}
export const fetchGame = (id) =>{
  return dispatch =>{
      return fetch(`/api/game/${id}`)
             .then(res=>res.json())
             .then(data=>dispatch(gameFetched(data.game)))
  }
}