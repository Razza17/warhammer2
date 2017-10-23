export function profilReducer(state={profile:[]}, action) {
    switch(action.type) {
        case "GET_PROFILE":
            return {...state, profile:[...action.payload]};
        case "GET_PROFILE_REJECTED":
            return action.payload;
        case "POST_PROFILE":
            return {profile:[...state.profile, ...action.payload]};
        case "POST_PROFILE_REJECTED":
            return action.payload;
        default:
            return state;
    }
}
