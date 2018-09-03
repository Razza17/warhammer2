export function moneyReducer(state={money:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_MONEY":
    return {...state, money:[...action.payload]};
    case "GET_MONEY_REJECTED":
    return action.payload;

    // POST
    case "POST_MONEY":
    return {...state, money:[...state.money, action.payload]};
    case "POST_MONEY_REJECTED":
    return action.payload;

    // UPDATE
    case "UPDATE_MONEY":
    return {...state, ...action.payload};
    case "UPDATE_MONEY_REJECTED":
    return action.payload;

    // DEFAULT
    default:
    return state;
  }
};
