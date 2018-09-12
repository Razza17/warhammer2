export function logupReducer(state={logup:[]}, action) {
    switch(action.type) {
        // POST
        case "POST_LOGUP":
            return {...state, logup:[...state.logup, action.payload]};
        case "POST_LOGUP_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
}
