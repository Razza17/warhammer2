export function inventaireReducer(state={inventaire:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_INVENTAIRE":
      return {...state, inventaire:[...action.payload]};

    case "GET_INVENTAIRE_REJECTED":
      return action.payload;

    // POST
    case "POST_INVENTAIRE":
      return {...state, inventaire:[...state.inventaire, action.payload]};

    case "POST_INVENTAIRE_REJECTED":
      return action.payload;

    // DELETE
    case "DELETE_INVENTAIRE":
      const currentInventaireToDelete = state.inventaire.filter(inv => inv._id !== action.id);
      return {...state, inventaire:currentInventaireToDelete};

    case "DELETE_INVENTAIRE_REJECTED":
      return action.payload;

    // UPDATE
    case "UPDATE_INVENTAIRE":
      const invArray = [...state.inventaire]
      const newInv = action.datas
      invArray[invArray.findIndex(inv => inv._id === action.id)] = newInv
      return {
        ...state,
        payload:action.payload,
        inventaire:invArray,
        msg:'Your inventory has been successfully updated',
        style:'success'
      };

    case "UPDATE_INVENTAIRE_REJECTED":
      return {...state, payload:action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

    // DEFAULT
    default:
    return state;
  }
};
