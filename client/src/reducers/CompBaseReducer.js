export function compBaseReducer(state={compBase:[]}, action) {
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
            return {...state, ...action.payload, msg:'Your based skills has been successfully updated', style:'success'};
        case "UPDATE_COMPBASE_REJECTED":
            return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

        // DEFAULT
        default:
            return state;
    }
};
