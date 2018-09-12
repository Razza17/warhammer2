import axios from 'axios';

// GET COUNT POINT
export function getCount(user, perso) {
  return function(dispatch) {
    axios.get('/count/' + user + '/' + perso)
    .then(function(response) {
      dispatch({type:"GET_COUNT", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_COUNT_REJECTED", payload:err})
    })
  }
}


// POST COUNT POINT
export function postCount(data) {
  return function(dispatch) {
    axios.post('/count', data)
    .then(function(response) {
      dispatch({type:"POST_COUNT", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_COUNT_REJECTED", payload:err})
    })
  }
}

// UPDATE COUNT POINT
export function updateCount(id, newData) {
  return function(dispatch) {
    axios.put('/count/' + id, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_COUNT", payload:response.data, id:id, datas:newData})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_COUNT_REJECTED", payload:err})
    })
  }
}

// RENAME PERSO
export function renameCount(user, perso, newData) {
  return function(dispatch) {
    axios.put('/count/' + user + '/' + perso, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_COUNT", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_COUNT_REJECTED", payload:err})
    })
  }
}
