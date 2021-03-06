import axios from 'axios';

// GET TALENT
export function getTalent(user, perso) {
  return function(dispatch) {
    axios.get('/talent/' + user + '/' + perso)
    .then(function(response) {
      dispatch({type:"GET_TALENT", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_TALENT_REJECTED", payload:err})
    })
  }
}


// POST TALENT
export function postTalent(newTalent) {
  return function(dispatch) {
    axios.post('/talent', newTalent)
    .then(function(response) {
      dispatch({type:"POST_TALENT", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_TALENT_REJECTED", payload:err})
    })
  }
}

// UPDATE TALENT
export function updateTalent(id, newData) {
  return function(dispatch) {
    axios.put('/talent/' + id, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_TALENT", payload:response.data, id:id, datas:newData})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_TALENT_REJECTED", payload:err})
    })
  }
}

// RENAME PERSO
export function renameTalent(user, perso, newData) {
  return function(dispatch) {
    axios.put('/talent/' + user + '/' + perso, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_TALENT", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_TALENT_REJECTED", payload:err})
    })
  }
}
