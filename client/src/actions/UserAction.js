import axios from 'axios';

// GET CHARACTER USER
export function getUser(user) {
  return function(dispatch) {
    axios.get('/user', user)
    .then(function(response) {
      dispatch({type:"GET_USER", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_USER_REJECTED", payload:err})
    })
  }
}

// GET ALL USER
export function getAllUser() {
  return function(dispatch) {
    axios.get('/user')
    .then(function(response) {
      dispatch({type:"GET_ALL_USER", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_ALL_USER_REJECTED", payload:err})
    })
  }
}


// POST CHARACTER USER
export function postUser(user, history) {
  return function(dispatch) {
    axios.post('/user', user)
    .then(function(response) {
      dispatch({type:"POST_USER", payload:response.data})
      history.push('/signin')
    })
    .catch(function(err) {
      dispatch({type:"POST_USER_REJECTED", payload:err})
    })
  }
}

// UPDATE CHARACTER USER
export function updateUser(pseudo, newUser) {
  return function(dispatch) {
    axios.put('/user/' + pseudo, newUser)
    .then(function(response) {
      dispatch({type:"UPDATE_USER", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_USER_REJECTED", payload:err})
    })
  }
}
