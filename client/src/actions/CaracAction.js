import axios from 'axios';

// GET CHARACTER CARACTERISTIQUE
export function getCarac(user, perso) {
  return function(dispatch) {
    axios.get('/caracteristique/' + user + '/' + perso)
    .then(function(response) {
      dispatch({type:"GET_CARACTERISTIQUE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_CARACTERISTIQUE_REJECTED", payload:err})
    })
  }
}


// POST CHARACTER CARACTERISTIQUE
export function postCarac(carac) {
  return function(dispatch) {
    axios.post('/caracteristique', carac)
    .then(function(response) {
      dispatch({type:"POST_CARACTERISTIQUE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_CARACTERISTIQUE_REJECTED", payload:err})
    })
  }
}

// UPDATE CHARACTER CARACTERISTIQUE
export function updateCarac(id, newData) {
  return function(dispatch) {
    axios.put('/caracteristique/' + id, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_CARACTERISTIQUE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_CARACTERISTIQUE_REJECTED", payload:err})
    })
  }
}

// RENAME PERSO
export function renameCarac(user, perso, newData) {
  return function(dispatch) {
    axios.put('/caracteristique/' + user + '/' + perso, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_CARACTERISTIQUE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_CARACTERISTIQUE_REJECTED", payload:err})
    })
  }
}
