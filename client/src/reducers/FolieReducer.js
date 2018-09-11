export function folieReducer(state={folie:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_FOLIE":
      return {...state, folie:[...action.payload]};
      
    case "GET_FOLIE_REJECTED":
      return action.payload;

    // POST
    case "POST_FOLIE":
      return {...state, folie:[...state.folie, action.payload]};

    case "POST_FOLIE_REJECTED":
      return action.payload;

    // DELETE
    case "DELETE_FOLIE":
      const currentFolieToDelete = state.folie.filter(folie => folie._id !== action.payload);

      return {...state, folie:currentFolieToDelete};

    case "DELETE_FOLIE_REJECTED":
      return action.payload;

    // UPDATE
    case "UPDATE_FOLIE":
      const folieArray = [...state.folie]
      const newFolie = action.datas
      folieArray[folieArray.findIndex(folie => folie._id === action.id)] = newFolie

      return {
        ...state,
        payload:action.payload,
        folie: folieArray,
        msg:'Your crazyness has been successfully updated',
        style:'success'
      };

    case "UPDATE_FOLIE_REJECTED":
      return {...state, payload:action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

    // DEFAULT
    default:
      return state;
  }
};
