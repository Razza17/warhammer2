export function caracActuelReducer(state={caracActuel:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_CARACACTUEL":
            return {...state, caracActuel:[...action.payload]};
        case "GET_CARACACTUEL_REJECTED":
            return action.payload;

        // POST
        case "POST_CARACACTUEL":
            return {caracActuel:[...state.caracActuel, ...action.payload]};
        case "POST_CARACACTUEL_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_CARACACTUEL":
            return {...state, ...action.payload, msg:'Your Actual carac has been successfully updated', style:'success'};
        case "UPDATE_CARACACTUEL_REJECTED":
            return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

        // DEFAULT
        default:
            return state;
    }
}
