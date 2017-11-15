import axios from 'axios';

// GET CHARACTER CARACBASE
export function getCaracBase() {
    return function(dispatch) {
        axios.get('/caracbase')
            .then(function(response) {
                dispatch({type:"GET_CARACBASE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"GET_CARACBASE_REJECTED", payload:err})
            })
    }
}


// POST CHARACTER CARACBASE
export function postCaracBase(caracBase) {
    return function(dispatch) {
        axios.post('/caracbase')
            .then(function(response) {
                dispatch({type:"POST_CARACBASE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_CARACBASE_REJECTED", payload:err})
            })
    }
}

// UPDATE CHARACTER CARACBASE
export function updateCaracBase(id, newCarac) {
    return function(dispatch) {
        axios.put('/caracbase/' + id, newCarac)
            .then(function(response) {
                dispatch({type:'UPDATE_CARACBASE', payload:response.data, response:response.status})
            })
            .catch(function(err) {
                dispatch({type:'UPDATE_CARACBASE_REJECTED', payload:err})
            })
    };
}