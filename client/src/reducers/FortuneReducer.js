export function fortuneReducer(state={fortune:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_FORTUNE":
            return {...state, fortune:[...action.payload]};
        case "GET_FORTUNE_REJECTED":
            return action.payload;

        // POST
        case "POST_FORTUNE":
            return {fortune:[...state.fortune, ...action.payload]};
        case "POST_FORTUNE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_FORTUNE":
            return {...state, fortune:[...action.payload]};
        case "UPDATE_FORTUNE_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
