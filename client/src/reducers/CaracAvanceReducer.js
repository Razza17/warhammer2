export function caracAvanceReducer(state={caracAvance:[]}, action) {
    switch(action.type) {
        case "GET_CARACAVANCE":
            return {...state, caracAvance:[...action.payload]};
        case "GET_CARACAVANCE_REJECTED":
            return action.payload;
        case "POST_CARACAVANCE":
            return {caracAvance:[...state.caracAvance, ...action.payload]};
        case "POST_CARACAVANCE_REJECTED":
            return action.payload;
        default:
            return state;
    }
}
