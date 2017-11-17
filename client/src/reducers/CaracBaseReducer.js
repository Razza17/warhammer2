export function caracBaseReducer(state={caracBase:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_CARACBASE":
            return {...state, caracBase:[...action.payload]};
        case "GET_CARACBASE_REJECTED":
            return action.payload;

        // POST
        case "POST_CARACBASE":
            return {caracBase:[...state.caracBase, ...action.payload]};
        case "POST_CARACBASE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_CARACBASE":
            return {...state, ...action.payload, msg:'Your Caracteristics has been successfully updated', style:'success'};
        case "UPDATE_CARACBASE_REJECTED":
            return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

        // DEFAULT
        default:
            return state;
    }
}
