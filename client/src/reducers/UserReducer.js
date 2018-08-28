export function userReducer(state={user:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_USER":
      return {...state, user:[...action.payload]};
    case "GET_USER_REJECTED":
      return action.payload;

    // GET ALL
    case "GET_ALL_USER":
      return {...state, user:[...action.payload]};
    case "GET_ALL_USER_REJECTED":
      return action.payload;

    // POST
    case "POST_USER":
      return {user:[...state.user, ...action.payload]};
    case "POST_USER_REJECTED":
      return action.payload;

    // UPDATE
    case "UPDATE_USER":
      return {...state, ...action.payload, msg:'Your User has been successfully updated', style:'success'};
    case "UPDATE_USER_REJECTED":
      return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

    // DEFAULT
    default:
    return state;
  }
}
