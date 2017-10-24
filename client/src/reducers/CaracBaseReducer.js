import {updateCaracBase} from "../actions/CaracBaseAction";

export function caracBaseReducer(state={caracBase:[]}, action) {
    switch(action.type) {
        case "GET_CARACBASE":
            return {...state, caracBase:[...action.payload]};
        case "GET_CARACBASE_REJECTED":
            return action.payload;
        case "POST_CARACBASE":
            return {caracBase:[...state.caracBase, ...action.payload]};
        case "POST_CARACBASE_REJECTED":
            return action.payload;
        case "UPADTE_CARACBASE":
            const currentCaracToUpdate = [...state.caracBase];

            const indexToUpdate = currentCaracToUpdate.findIndex(
                function(carac){
                    return carac._id === action.payload._id;
                }
            );

            const newCaracToUpdate = {
                ...currentCaracToUpdate[indexToUpdate],
                cc: caracBase.cc
            };

            console.log("newCaracToUpdate : ", newCaracToUpdate);

            return {caracBase:[...currentCaracToUpdate.slice(0, indexToUpdate), newCaracToUpdate, ...currentCaracToUpdate.slice(indexToUpdate + 1)]};
        case "UPDATE_CARACBASE_REJECTED":
            return action.payload;
        default:
            return state;
    }
}
