import axios from 'axios';

// GET COMPETENCE AVANCE
export function getCompAvance(user, perso) {
  return function(dispatch) {
    axios.get('/competenceavance/' + user + '/' + perso)
    .then(function(response) {
      dispatch({type:"GET_COMPAVANCE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_COMPAVANCE_REJECTED", payload:err})
    })
  }
}


// POST COMPETENCE AVANCE
export function postCompAvance(newComp) {
  return function(dispatch) {
    axios.post('/competenceavance', newComp)
    .then(function(response) {
      dispatch({type:"POST_COMPAVANCE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_COMPAVANCE_REJECTED", payload:err})
    })
  }
}

// UPDATE COMPETENCE AVANCE
export function updateCompAvance(id, newData) {
  return function(dispatch) {
    axios.put('/competenceavance/' + id, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_COMPAVANCE", payload:response.data, id:id, datas:newData})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_COMPAVANCE_REJECTED", payload:err})
    })
  }
}

// RENAME PERSO
export function renameCompAvance(user, perso, newData) {
  return function(dispatch) {
    axios.put('/competenceavance/' + user + '/' + perso, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_COMPAVANCE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_COMPAVANCE_REJECTED", payload:err})
    })
  }
}
