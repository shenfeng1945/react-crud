import {SET_GAMES,ADD_GAME,GAME_FETCH,UPDATE_GAME,GAME_DELETED,} from '../constants'
import {url} from '../constants/'
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
       fetch(`${url}/api/games`)
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
      return fetch(`${url}/api/games`,{
          method: 'post',
          body: JSON.stringify(data),
          headers: {
              'Content-Type':'application/json'
          }
       }).then(handleResponse)
         .then(data=>dispatch(addGame(data)))
    }
    
}
export const fetchGame = (id) =>{
  return dispatch =>{
      return fetch(`${url}/api/game/${id}`)
             .then(res=>res.json())
             .then(data=>dispatch(gameFetched(data.game)))
  }
}
const gameUpdate = (game)=>{
    return {
        type: UPDATE_GAME,
        game
    }
}
export const updateGame = (data)=>{
   return dispatch =>{
       return fetch(`${url}/api/games/${data._id}`,{
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
       }).then(handleResponse)
         .then(data=>dispatch(gameUpdate(data)))
             
   }
}
const gameDeleted = (gameId) =>{
    return {
        type: GAME_DELETED,
        gameId
    }
}
export const deleteGame = (id) =>{
   return dispatch =>{
    return fetch(`${url}/api/games/${id}`,{
        method: 'delete',
        headers: {
            'Content-Type':'application/json'
        }
       }).then(handleResponse)
         .then(_=>dispatch(gameDeleted(id)))
   }
}
