export function profilReducer(state={profile:[], status:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_PROFILE":
            return {...state, profile:[...action.payload]};
        case "GET_PROFILE_REJECTED":
            return action.payload;

        // POST
        case "POST_PROFILE":
            return {profile:[...state.profile, ...action.payload]};
        case "POST_PROFILE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_PROFILE":
            return {...state, ...action.payload, status:action.response};
        case "UPDATE_PROFILE_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
}
