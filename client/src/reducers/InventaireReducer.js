export function inventaireReducer(state={inventaire:[]}, action) {
    switch(action.type) {
        // GET
        case "GET_INVENTAIRE":
            return {...state, inventaire:[...action.payload]};
        case "GET_INVENTAIRE_REJECTED":
            return action.payload;

        // POST
        case "POST_INVENTAIRE":
            return {inventaire:[...state.inventaire, ...action.payload]};
        case "POST_INVENTAIRE_REJECTED":
            return action.payload;

        // DELETE
        case "DELETE_INVENTAIRE":
            const currentInventaireToDelete = [...state.inventaire];

            const indexToDelete =
                currentInventaireToDelete.findIndex(
                    function(inventaire){
                        return inventaire._id === action.payload;
                    }
                );

            return {inventaire:[...currentInventaireToDelete.splice(0, indexToDelete), ...currentInventaireToDelete.splice(indexToDelete, 1)]};
        case "DELETE_INVENTAIRE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_INVENTAIRE":
            return {...state, ...action.payload};
        case "UPDATE_INVENTAIRE_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
