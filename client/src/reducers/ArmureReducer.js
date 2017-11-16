export function armureReducer(state={armure:[], status:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_ARMURE":
            return {...state, armure:[...action.payload]};
        case "GET_ARMURE_REJECTED":
            return action.payload;

        // POST
        case "POST_ARMURE":
            return {armure:[...state.armure, ...action.payload]};
        case "POST_ARMURE_REJECTED":
            return action.payload;

        // DELETE
        case "DELETE_ARMURE":
            
            const currentArmureToDelete = [...state.armure];
            
            const indexToDelete =
                currentArmureToDelete.findIndex(
                    function(armure){
                        return armure._id === action.payload;
                    }
                );

            return {armure:[
                ...currentArmureToDelete.slice(0, indexToDelete),
                ...currentArmureToDelete.slice(indexToDelete + 1)
            ]};
        case "DELETE_ARMURE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_ARMURE":
            return {...state, ...action.payload, status:action.response};
        case "UPDATE_ARMURE_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
