import axios from 'axios';

// GET ARME
export function getArme(user, perso) {
  return function(dispatch) {
    axios.get('/arme/' + user + '/' + perso)
    .then(function(response) {
      dispatch({type:"GET_ARME", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_ARME_REJECTED", payload:err})
    })
  }
}


// POST ARME
export function postArme(armes) {
  return function(dispatch) {
    axios.post('/arme', armes)
    .then(function(response) {
      dispatch({type:"POST_ARME", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_ARME_REJECTED", payload:err})
    })
  }
}

// DELETE ARME
export function deleteArme(id){
  return function(dispatch) {
    axios.delete('/arme/' + id)
    .then(function(response) {
      dispatch({type:'DELETE_ARME', payload:id})
    })
    .catch(function(err) {
      dispatch({type:'DELETE_ARME_REJECTED', payload:err})
    })
  }
}

// UPDATE ARME
export function updateArme(id, newData) {
  return function(dispatch) {
    axios.put('/arme/' + id, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_ARME", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_ARME_REJECTED", payload:err})
    })
  }
}

// RENAME PERSO
export function renameArme(user, perso, newData) {
  return function(dispatch) {
    axios.put('/arme/' + user + '/' + perso, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_ARME", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_ARME_REJECTED", payload:err})
    })
  }
}
