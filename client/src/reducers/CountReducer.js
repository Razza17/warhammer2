export function countReducer(state={count:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_COUNT":
    return {...state, count:[...action.payload]};
    case "GET_COUNT_REJECTED":
    return action.payload;

    // POST
    case "POST_COUNT":
    return {...state, count:[...state.count, action.payload]};
    case "POST_COUNT_REJECTED":
    return action.payload;

    // UPDATE
    case "UPDATE_COUNT":
    return {...state, ...action.payload, msg:'Your Profile has been successfully updated', style:'success'};
    case "UPDATE_COUNT_REJECTED":
    return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

    // DEFAULT
    default:
    return state;
  }
};
