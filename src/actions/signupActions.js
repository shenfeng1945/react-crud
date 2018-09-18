import axios from 'axios';
export const userSignup = (userData) => {
    return dispatch => {
        return axios.post('/api/users',userData)
    }
}
