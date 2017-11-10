import axios from 'axios';

// GET ARMURE
export function getArmure() {
    return function(dispatch) {
        axios.get('/armure')
            .then(function(response) {
                dispatch({type:"GET_ARMURE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"GET_ARMURE_REJECTED", payload:err})
            })
    }
}


// POST ARMURE
export function postArmure(armures) {
    return function(dispatch) {
        axios.post('/armure', armures)
            .then(function(response) {
                dispatch({type:"POST_ARMURE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_ARMURE_REJECTED", payload:err})
            })
    }
}

// DELETE ARMURE
export function deleteArmure(id){
    return function(dispatch) {
        axios.delete('/armure/' + id)
            .then(function(response) {
                dispatch({type:'DELETE_ARMURE', payload:id})
            })
            .catch(function(err) {
                dispatch({type:'DELETE_ARMURE_REJECTED', payload:err})
            })
    }
}

// UPDATE ARMURE
export function updateArmure(id, newData) {
    return function(dispatch) {
        axios.put('/armure/' + id, newData)
            .then(function(response) {
                dispatch({type:"UPDATE_ARMURE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"UPDATE_ARMURE_REJECTED", payload:err})
            })
    }
}