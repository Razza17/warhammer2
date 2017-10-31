export function detailReducer(state={details:[]}, action) {
    switch(action.type) {
        case "GET_DETAILS":
            return {...state, details:[...action.payload]};
        case "GET_DETAILS_REJECTED":
            return action.payload;
        case "POST_DETAILS":
            return {details:[...state.profile, ...action.payload]};
        case "POST_DETAILS_REJECTED":
            return action.payload;
        default:
            return state;
    }
}
