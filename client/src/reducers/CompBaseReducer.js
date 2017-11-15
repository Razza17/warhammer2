export function compBaseReducer(state={compBase:[], status:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_COMPBASE":
            return {...state, compBase:[...action.payload]};
        case "GET_COMPBASE_REJECTED":
            return action.payload;

        // POST
        case "POST_COMPBASE":
            return {compBase:[...state.compBase, ...action.payload]};
        case "POST_COMPBASE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_COMPBASE":
            return {...state, status:action.response};
        case "UPDATE_COMPBASE_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
