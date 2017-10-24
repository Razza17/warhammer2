import axios from 'axios';

// GET CHARACTER CARACACTUEL
export function getCaracActuel() {
    return function(dispatch) {
        axios.get('/caracactuel')
            .then(function(response) {
                dispatch({type:"GET_CARACACTUEL", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"GET_CARACACTUEL_REJECTED", payload:err})
            })
    }
}


// POST CHARACTER CARACACTUEL
export function postCaracActuel() {
    return function(dispatch) {
        axios.post('/caracactuel')
            .then(function(response) {
                dispatch({type:"POST_CARACACTUEL", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_CARACACTUEL_REJECTED", payload:err})
            })
    }
}
