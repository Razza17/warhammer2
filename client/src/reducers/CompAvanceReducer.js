export function compAvanceReducer(state={compAvance:[], status:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_COMPAVANCE":
            return {...state, compAvance:[...action.payload]};
        case "GET_COMPAVANCE_REJECTED":
            return action.payload;

        // POST
        case "POST_COMPAVANCE":
            return {compAvance:[...state.compAvance, ...action.payload]};
        case "POST_COMPAVANCE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_COMPAVANCE":
            return {...state, status:action.response};
        case "UPDATE_COMPAVANCE_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
