export function experienceReducer(state={experience:[]}, action) {
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
            return {...state, ...action.payload, msg:'Your experience has been successfully updated', style:'success'};
        case "UPDATE_EXPERIENCE_REJECTED":
            return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

        // DEFAULT
        default:
            return state;
    }
};
