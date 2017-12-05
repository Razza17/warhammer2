import axios from 'axios';

// POST LOGUP
export function postLogup(logups) {
    return function(dispatch) {
        axios.post('/user', logups)
            .then(function(response) {
                dispatch({type:"POST_LOGUP", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_LOGUP_REJECTED", payload:err})
            })
    }
}
