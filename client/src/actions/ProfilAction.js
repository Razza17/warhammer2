import axios from 'axios';

// GET CHARACTER PROFILE
export function getProfile(user, perso) {
  return function(dispatch) {
    axios.get('/profil/' + user + '/' + perso)
    .then(function(response) {
      dispatch({type:"GET_PROFILE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_PROFILE_REJECTED", payload:err})
    })
  }
}


// POST CHARACTER PROFILE
export function postProfile(profil) {
  return function(dispatch) {
    axios.post('/profil', profil)
    .then(function(response) {
      dispatch({type:"POST_PROFILE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_PROFILE_REJECTED", payload:err})
    })
  }
}

// UPDATE CHARACTER PROFILE
export function updateProfile(id, newProfile) {
  return function(dispatch) {
    axios.put('/profil/' + id, newProfile)
    .then(function(response) {
      dispatch({type:"UPDATE_PROFILE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_PROFILE_REJECTED", payload:err})
    })
  }
}

// UPDATE CHARACTER NAME
export function renameProfile(user, name, newName) {
  return function(dispatch) {
    axios.put('/profil/' + user + '/' + name, newName)
    .then(function(response) {
      dispatch({type:"UPDATE_PROFILE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_PROFILE_REJECTED", payload:err})
    })
  }
}
