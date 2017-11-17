export function caracAvanceReducer(state={caracAvance:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_CARACAVANCE":
            return {...state, caracAvance:[...action.payload]};
        case "GET_CARACAVANCE_REJECTED":
            return action.payload;

        // POST
        case "POST_CARACAVANCE":
            return {caracAvance:[...state.caracAvance, ...action.payload]};
        case "POST_CARACAVANCE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_CARACAVANCE":
            return {...state, ...action.payload, msg:'Your Advanced carac has been successfully updated', style:'success'};
        case "UPDATE_CARACAVANCE_REJECTED":
            return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

        // DEFAULT
        default:
            return state;
    }
}
