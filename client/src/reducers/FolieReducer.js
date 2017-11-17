export function folieReducer(state={folie:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_FOLIE":
            return {...state, folie:[...action.payload]};
        case "GET_FOLIE_REJECTED":
            return action.payload;

        // POST
        case "POST_FOLIE":
            return {...state, folie:[...state.folie, ...action.payload]};
        case "POST_FOLIE_REJECTED":
            return action.payload;

        // DELETE
        case "DELETE_FOLIE":
            const currentFolieToDelete = [...state.folie];

            const indexToDelete =
                currentFolieToDelete.findIndex(
                    function(folie){
                        return folie._id === action.payload;
                    }
                );

            return {folie:[
                ...currentFolieToDelete.slice(0, indexToDelete),
                ...currentFolieToDelete.slice(indexToDelete + 1)
            ]};
        case "DELETE_FOLIE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_FOLIE":
            return {...state, ...action.payload, msg:'Your crazyness has been successfully updated', style:'success'};
        case "UPDATE_FOLIE_REJECTED":
            return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

        // DEFAULT
        default:
            return state;
    }
};
