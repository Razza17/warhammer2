import axios from 'axios';

// GET MONEY
export function getMoney(user, perso) {
  return function(dispatch) {
    axios.get('/money/' + user + '/' + perso)
    .then(function(response) {
      dispatch({type:"GET_MONEY", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_MONEY_REJECTED", payload:err})
    })
  }
}


// POST MONEY
export function postMoney(money) {
  return function(dispatch) {
    axios.post('/money', money)
    .then(function(response) {
      dispatch({type:"POST_MONEY", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_MONEY_REJECTED", payload:err})
    })
  }
}

// UPDATE MONEY
export function updateMoney(id, newData) {
  return function(dispatch) {
    axios.put('/money/' + id, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_MONEY", payload:response.data, id:id, datas:newData})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_MONEY_REJECTED", payload:err})
    })
  }
}

// RENAME PERSO
export function renameMoney(user, perso, newData) {
  return function(dispatch) {
    axios.put('/money/' + user + '/' + perso, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_MONEY", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_MONEY_REJECTED", payload:err})
    })
  }
}
