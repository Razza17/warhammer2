export function detailReducer(state={details:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_DETAILS":
    return {...state, details:[...action.payload]};
    case "GET_DETAILS_REJECTED":
    return action.payload;

    // POST
    case "POST_DETAILS":
    return {...state, details:[...state.details, ...action.payload]};
    case "POST_DETAILS_REJECTED":
    return action.payload;

    // UPDATE
    case "UPDATE_DETAILS":
    return {...state, ...action.payload, msg:'Your Profile has been successfully updated', style:'success'};
    case "UPDATE_DETAILS_REJECTED":
    return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

    default:
    return state;
  }
}
