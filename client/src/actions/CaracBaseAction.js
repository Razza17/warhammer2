import axios from 'axios';

// GET CHARACTER CARACBASE
export function getCaracBase() {
    return function(dispatch) {
        axios.get('/api/caracbase')
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
        axios.post('/api/caracbase')
            .then(function(response) {
                dispatch({type:"POST_CARACBASE", payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:"POST_CARACBASE_REJECTED", payload:err})
            })
    }
}

// UPDATE CHARACTER CARACBASE
export function updateCaracBase(id, oldCarac, newCarac) {

    const currentCaracToUpdate = oldCarac;

    const indexToUpdate = currentCaracToUpdate.findIndex(
        function(carac){
            return carac._id === id;
        }
    );

    let caracUpdate =[...currentCaracToUpdate.slice(0, indexToUpdate), newCarac,
        ...currentCaracToUpdate.slice(indexToUpdate + 1)];

    return function(dispatch) {
        axios.post('/api/caracbase', caracUpdate)
            .then(function(response) {
                dispatch({type:'UPDATE_CART', payload:response.data})
            })
            .catch(function(err) {
                dispatch({type:'UPDATE_CART_REJECTED', payload:err})
            })
    };
}