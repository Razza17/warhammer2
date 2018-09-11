export function armeReducer(state={arme:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_ARME":
      return {...state, arme:[...action.payload]};
      
    case "GET_ARME_REJECTED":
      return action.payload;

    // POST
    case "POST_ARME":
      return {...state, arme:[...state.arme, action.payload]};

    case "POST_ARME_REJECTED":
      return action.payload;

    // DELETE
    case "DELETE_ARME":
      const currentArmeToDelete = state.arme.filter(arme => arme._id !== action.payload);

      return {...state, arme:currentArmeToDelete};

    case "DELETE_ARME_REJECTED":
      return action.payload;

    // UPDATE
    case "UPDATE_ARME":

      const armeArray = [...state.arme];
      const newArme = action.datas;
      armeArray[armeArray.findIndex(arme => arme._id === action.id)] = newArme;

      return {
        ...state,
        arme: armeArray,
        payload: action.payload,
        msg:'Your Weapons has been successfully updated',
        style:'success'
      };

    case "UPDATE_ARME_REJECTED":
      return {
        ...state,
        payload:action.payload,
        msg:'Oups something went wrong ! Maybe try again ;-)',
        style:'danger'
      };

    // DEFAULT
    default:
      return state;
  }
};
