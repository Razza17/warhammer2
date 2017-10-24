import axios from 'axios';

// GET CHARACTER PROFILE
export function getProfile() {
    return function(dispatch) {
        axios.get('/profil')
            .then(function(response) {
                dispatch({type:"GET_PROFILE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"GET_PROFILE_REJECTED", payload:err})
            })
    }
}


// POST CHARACTER PROFILE
export function postProfile() {
    return function(dispatch) {
        axios.post('/profil')
            .then(function(response) {
                dispatch({type:"POST_PROFILE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_PROFILE_REJECTED", payload:err})
            })
    }
}