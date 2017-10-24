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
export function updateCaracBase(caracBase, id) {
    return function(dispatch) {
        axios.put('/caracbase/' + id)
            .then(function(response) {
                dispatch({type:"UPADTE_CARACBASE", payload:id})
            })
            .catch(function(err) {
                dispatch({type:"UPADTE_CARACBASE_REJECTED", payload:err})
            })
    }
}