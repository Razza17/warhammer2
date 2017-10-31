import axios from 'axios';

// GET COUNT POINT
export function getCount() {
    return function(dispatch) {
        axios.get('/count')
            .then(function(response) {
                dispatch({type:"GET_COUNT", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"GET_COUNT_REJECTED", payload:err})
            })
    }
}


// POST COUNT POINT
export function postCount() {
    return function(dispatch) {
        axios.post('/count')
            .then(function(response) {
                dispatch({type:"POST_COUNT", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_COUNT_REJECTED", payload:err})
            })
    }
}

// UPDATE COUNT POINT
export function updateCount(id, newData) {
    return function(dispatch) {
        axios.put('/count/' + id, newData)
            .then(function(response) {
                dispatch({type:"UPDATE_COUNT", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"UPDATE_COUNT_REJECTED", payload:err})
            })
    }
}
