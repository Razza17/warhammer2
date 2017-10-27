import axios from 'axios';

// GET FORTUNE POINT
export function getFortune() {
    return function(dispatch) {
        axios.get('/count')
            .then(function(response) {
                dispatch({type:"GET_FORTUNE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"GET_FORTUNE_REJECTED", payload:err})
            })
    }
}


// POST FORTUNE POINT
export function postFortune() {
    return function(dispatch) {
        axios.post('/count')
            .then(function(response) {
                dispatch({type:"POST_FORTUNE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_FORTUNE_REJECTED", payload:err})
            })
    }
}

// UPDATE FORTUNE POINT
export function updateFortune(id, newFortune) {
    return function(dispatch) {
        axios.put('/count/' + id, newFortune)
            .then(function(response) {
                dispatch({type:"UPDATE_FORTUNE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"UPDATE_FORTUNE_REJECTED", payload:err})
            })
    }
}
