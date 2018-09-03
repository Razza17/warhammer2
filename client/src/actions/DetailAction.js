import axios from 'axios';

// GET CHARACTER DETAILS
export function getDetails(user, perso) {
  return function(dispatch) {
    axios.get('/details/' + user + '/' + perso)
    .then(function(response) {
      dispatch({type:"GET_DETAILS", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_DETAILS_REJECTED", payload:err})
    })
  }
}


// POST CHARACTER DETAILS
export function postDetails(details) {
  return function(dispatch) {
    axios.post('/details', details)
    .then(function(response) {
      dispatch({type:"POST_DETAILS", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_DETAILS_REJECTED", payload:err})
    })
  }
}

// UPDATE CHARACTER DETAILS
export function updateDetails(id, newDetails) {
  return function(dispatch) {
    axios.put('/details/' + id, newDetails)
    .then(function(response) {
      dispatch({type:"UPDATE_DETAILS", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_DETAILS_REJECTED", payload:err})
    })
  }
}

// RENAME PERSO
export function renameDetails(user, perso, newData) {
  return function(dispatch) {
    axios.put('/details/' + user + '/' + perso, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_DETAILS", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_DETAILS_REJECTED", payload:err})
    })
  }
}
