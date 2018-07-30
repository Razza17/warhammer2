import axios from 'axios';

// GET INVENTAIRE
export function getInventaire() {
  return function(dispatch) {
    axios.get('/inventaire')
    .then(function(response) {
      dispatch({type:"GET_INVENTAIRE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_INVENTAIRE_REJECTED", payload:err})
    })
  }
}


// POST INVENTAIRE
export function postInventaire(inventaires) {
  return function(dispatch) {
    axios.post('/inventaire', inventaires)
    .then(function(response) {
      dispatch({type:"POST_INVENTAIRE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_INVENTAIRE_REJECTED", payload:err})
    })
  }
}

// DELETE INVENTAIRE
export function deleteInventaire(id){
  return function(dispatch) {
    axios.delete('/inventaire/' + id)
    .then(function(response) {
      dispatch({type:'DELETE_INVENTAIRE', payload:id})
    })
    .catch(function(err) {
      dispatch({type:'DELETE_INVENTAIRE_REJECTED', payload:err})
    })
  }
}

// UPDATE INVENTAIRE
export function updateInventaire(id, newData) {
  return function(dispatch) {
    axios.put('/inventaire/' + id, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_INVENTAIRE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_INVENTAIRE_REJECTED", payload:err})
    })
  }
}
