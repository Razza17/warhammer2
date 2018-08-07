export function persoReducer(state={perso:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_PERSO":
    return {...state, perso:[...action.payload]};
    case "GET_PERSO_REJECTED":
    return action.payload;

    // POST
    case "POST_PERSO":
    return {...state, perso:[...state.perso, ...action.payload]};
    case "POST_PERSO_REJECTED":
    return action.payload;

    // UPDATE
    case "UPDATE_PERSO":
    return {...state, ...action.payload, msg:'Your character has been successfully updated', style:'success'};
    case "UPDATE_PERSO_REJECTED":
    return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

    // DEFAULT
    default:
    return state;
  }
}
