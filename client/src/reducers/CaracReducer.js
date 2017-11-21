export function caracReducer(state={carac:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_CARACTERISTIQUE":
            return {...state, carac:[...action.payload]};
        case "GET_CARACTERISTIQUE_REJECTED":
            return action.payload;

        // POST
        case "POST_CARACTERISTIQUE":
            return {carac:[...state.carac, ...action.payload]};
        case "POST_CARACTERISTIQUE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_CARACTERISTIQUE":
            return {...state, payload:action.payload, msg:'Your caracteristics has been successfully updated', style:'success'};
        case "UPDATE_CARACTERISTIQUE_REJECTED":
            return {...state, payload:action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

        // DEFAULT
        default:
            return state;
    }
}
