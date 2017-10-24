export function caracActuelReducer(state={caracActuel:[]}, action) {
    switch(action.type) {
        case "GET_CARACACTUEL":
            return {...state, caracActuel:[...action.payload]};
        case "GET_CARACACTUEL_REJECTED":
            return action.payload;
        case "POST_CARACACTUEL":
            return {caracActuel:[...state.caracActuel, ...action.payload]};
        case "POST_CARACACTUEL_REJECTED":
            return action.payload;
        default:
            return state;
    }
}
