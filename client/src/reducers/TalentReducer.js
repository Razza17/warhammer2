export function talentReducer(state={talent:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_TALENT":
            return {...state, talent:[...action.payload]};
        case "GET_TALENT_REJECTED":
            return action.payload;

        // POST
        case "POST_TALENT":
            return {talent:[...state.talent, ...action.payload]};
        case "POST_TALENT_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_TALENT":
            return {...state};
        case "UPDATE_TALENT_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
