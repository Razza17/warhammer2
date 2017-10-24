import axios from 'axios';

// GET CHARACTER CARACAVANCE
export function getCaracAvance() {
    return function(dispatch) {
        axios.get('/caracavance')
            .then(function(response) {
                dispatch({type:"GET_CARACAVANCE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"GET_CARACAVANCE_REJECTED", payload:err})
            })
    }
}


// POST CHARACTER CARACAVANCE
export function postCaracAvance() {
    return function(dispatch) {
        axios.post('/caracavance')
            .then(function(response) {
                dispatch({type:"POST_CARACAVANCE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_CARACAVANCE_REJECTED", payload:err})
            })
    }
}
