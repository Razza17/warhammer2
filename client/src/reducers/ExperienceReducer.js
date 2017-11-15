export function experienceReducer(state={experience:[], status:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_EXPERIENCE":
            return {...state, experience:[...action.payload]};
        case "GET_EXPERIENCE_REJECTED":
            return action.payload;

        // POST
        case "POST_EXPERIENCE":
            return {experience:[...state.experience, ...action.payload]};
        case "POST_EXPERIENCE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_EXPERIENCE":
            return {...state, ...action.payload, status:action.response};
        case "UPDATE_EXPERIENCE_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
