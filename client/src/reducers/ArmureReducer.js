export function armureReducer(state={armure:[]}, action) {
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
            // Create a copy of the current array of books
            const currentArmeToDelete = [...state.armure];
            // Determine at which index in books array is the book to be deleted
            const indexToDelete =
                currentArmeToDelete.findIndex(
                    function(armure){
                        return armure._id === action.payload;
                    }
                );
            //use slice to remove the book at the specified index
            return {armure:[...currentArmeToDelete.slice(0, indexToDelete), ...currentArmeToDelete.slice(indexToDelete + 1)]};
        case "DELETE_ARMURE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_ARMURE":
            return {...state, ...action.payload};
        case "UPDATE_ARMURE_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
