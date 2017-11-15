import axios from 'axios';

// GET EXPERIENCE
export function getExperience() {
    return function(dispatch) {
        axios.get('/experience')
            .then(function(response) {
                dispatch({type:"GET_EXPERIENCE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"GET_EXPERIENCE_REJECTED", payload:err})
            })
    }
}


// POST EXPERIENCE
export function postExperience(experiences) {
    return function(dispatch) {
        axios.post('/experience', experiences)
            .then(function(response) {
                dispatch({type:"POST_EXPERIENCE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_EXPERIENCE_REJECTED", payload:err})
            })
    }
}

// UPDATE EXPERIENCE
export function updateExperience(id, newData) {
    return function(dispatch) {
        axios.put('/experience/' + id, newData)
            .then(function(response) {
                dispatch({type:"UPDATE_EXPERIENCE", payload:response.data, response:response.status})
            })
            .catch(function(err) {
                dispatch({type:"UPDATE_EXPERIENCE_REJECTED", payload:err})
            })
    }
}
