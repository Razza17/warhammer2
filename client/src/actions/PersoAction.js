import axios from 'axios';

// GET CHARACTER
export function getPerso(user) {
  return function(dispatch) {
    axios.get('/perso/' + user)
    .then(function(response) {
      dispatch({type:"GET_PERSO", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_PERSO_REJECTED", payload:err})
    })
  }
}


// POST CHARACTER
export function postPerso(perso) {
  return function(dispatch) {
    axios.post('/perso', perso)
    .then(function(response) {
      dispatch({type:"POST_PERSO", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_PERSO_REJECTED", payload:err})
    })
  }
}

// UPDATE CHARACTER
export function updatePerso(id, newPerso) {
  return function(dispatch) {
    axios.put('/perso/' + id, newPerso)
    .then(function(response) {
      dispatch({type:"UPDATE_PERSO", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_PERSO_REJECTED", payload:err})
    })
  }
}

// RENAME PERSO
export function renamePerso(user, perso, newData) {
  return function(dispatch) {
    axios.put('/perso/' + user + '/' + perso, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_PERSO", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_PERSO_REJECTED", payload:err})
    })
  }
}
