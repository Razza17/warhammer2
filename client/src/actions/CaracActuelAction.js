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

// UPDATE CHARACTER CARACACTUEL
export function updateCaracActuel(id, newData) {
    return function(dispatch) {
        axios.put('/caracactuel/' + id, newData)
            .then(function(response) {
                dispatch({type:"UPDATE_CARACACTUEL", payload:response.data, response:response.status})
            })
            .catch(function(err) {
                dispatch({type:"UPDATE_CARACACTUEL_REJECTED", payload:err})
            })
    }
}
