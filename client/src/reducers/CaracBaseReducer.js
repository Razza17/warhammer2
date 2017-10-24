export function caracBaseReducer(state={caracBase:[]}, action) {
    switch(action.type) {
        case "GET_CARACBASE":
            return {...state, caracBase:[...action.payload]};
        case "GET_CARACBASE_REJECTED":
            return action.payload;
        case "POST_CARACBASE":
            return {caracBase:[...state.caracBase, ...action.payload]};
        case "POST_CARACBASE_REJECTED":
            return action.payload;
        default:
            return state;
    }
}
