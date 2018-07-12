import axios from 'axios';

// GET FOLIE
export function getFolie() {
  return function(dispatch) {
    axios.get('/folie')
    .then(function(response) {
      dispatch({type:"GET_FOLIE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_FOLIE_REJECTED", payload:err})
    })
  }
}


// POST FOLIE
export function postFolie(folies) {
  return function(dispatch) {
    axios.post('/folie', folies)
    .then(function(response) {
      dispatch({type:"POST_FOLIE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_FOLIE_REJECTED", payload:err})
    })
  }
}

// DELETE FOLIE
export function deleteFolie(id){
  return function(dispatch) {
    axios.delete('/folie/' + id)
    .then(function(response) {
      dispatch({type:'DELETE_FOLIE', payload:id})
    })
    .catch(function(err) {
      dispatch({type:'DELETE_FOLIE_REJECTED', payload:err})
    })
  }
}

// UPDATE FOLIE
export function updateFolie(id, newData) {
  return function(dispatch) {
    axios.put('/folie/' + id, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_FOLIE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_FOLIE_REJECTED", payload:err})
    })
  }
}
