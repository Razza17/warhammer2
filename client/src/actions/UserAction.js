import axios from 'axios';

// GET CHARACTER USER
export function getUser(pseudo) {
  return function(dispatch) {
    axios.get('/user/' + pseudo)
    .then(function(response) {
      dispatch({type:"GET_USER", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_USER_REJECTED", payload:err})
    })
  }
}


// POST CHARACTER USER
export function postUser() {
  return function(dispatch) {
    axios.post('/user')
    .then(function(response) {
      dispatch({type:"POST_USER", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_USER_REJECTED", payload:err})
    })
  }
}

// UPDATE CHARACTER USER
export function updateUser(id, newUser) {
  return function(dispatch) {
    axios.put('/user/' + id, newUser)
    .then(function(response) {
      dispatch({type:"UPDATE_USER", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_USER_REJECTED", payload:err})
    })
  }
}
