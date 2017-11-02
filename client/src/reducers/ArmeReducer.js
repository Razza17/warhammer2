export function armeReducer(state={arme:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_ARME":
            return {...state, arme:[...action.payload]};
        case "GET_ARME_REJECTED":
            return action.payload;

        // POST
        case "POST_ARME":
            return {arme:[...state.arme, ...action.payload]};
        case "POST_ARME_REJECTED":
            return action.payload;

        // DELETE
        case "DELETE_ARME":
            // Create a copy of the current array of books
            const currentArmeToDelete = [...state.arme];
            // Determine at which index in books array is the book to be deleted
            const indexToDelete =
                currentArmeToDelete.findIndex(
                    function(arme){
                        return arme._id === action.payload;
                    }
                );
            //use slice to remove the book at the specified index
            return {arme:[...currentArmeToDelete.slice(0, indexToDelete), ...currentArmeToDelete.slice(indexToDelete + 1)]};
        case "DELETE_ARME_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_ARME":
            return {...state, ...action.payload};
        case "UPDATE_ARME_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
