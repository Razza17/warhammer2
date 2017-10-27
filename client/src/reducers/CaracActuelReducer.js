export function caracActuelReducer(state={caracActuel:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_CARACACTUEL":
            return {...state, caracActuel:[...action.payload]};
        case "GET_CARACACTUEL_REJECTED":
            return action.payload;

        // POST
        case "POST_CARACACTUEL":
            return {caracActuel:[...state.caracActuel, ...action.payload]};
        case "POST_CARACACTUEL_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_CARACACTUEL":
            return {...state, caracActuel:[...action.payload]};
        case "UPDATE_CARACACTUEL_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
}
