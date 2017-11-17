export function countReducer(state={count:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_COUNT":
            return {...state, count:[...action.payload]};
        case "GET_COUNT_REJECTED":
            return action.payload;

        // POST
        case "POST_COUNT":
            return {count:[...state.count, ...action.payload]};
        case "POST_COUNT_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_COUNT":
            return {...state};
        case "UPDATE_COUNT_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
