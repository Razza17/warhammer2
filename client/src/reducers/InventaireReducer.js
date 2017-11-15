export function inventaireReducer(state={inventaire:[], status:[]}, action) {
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

            return {inventaire:[
                ...currentInventaireToDelete.slice(0, indexToDelete),
                ...currentInventaireToDelete.slice(indexToDelete + 1)
            ]};
        case "DELETE_INVENTAIRE_REJECTED":
            return action.payload;

        // UPDATE
        case "UPDATE_INVENTAIRE":
            return {...state, ...action.payload, status:action.response};
        case "UPDATE_INVENTAIRE_REJECTED":
            return action.payload;

        // DEFAULT
        default:
            return state;
    }
};
