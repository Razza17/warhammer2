export function armureReducer(state={armure:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_ARMURE":
      return {...state, armure:[...action.payload]};

    case "GET_ARMURE_REJECTED":
      return action.payload;

    // POST
    case "POST_ARMURE":
      return {...state, armure:[...state.armure, action.payload]};

    case "POST_ARMURE_REJECTED":
      return action.payload;

    // DELETE
    case "DELETE_ARMURE":
      const currentArmureToDelete = state.armure.filter(armure => armure._id !== action.payload);

      return {...state, armure:currentArmureToDelete};

    case "DELETE_ARMURE_REJECTED":
      return action.payload;

    // UPDATE
    case "UPDATE_ARMURE":
      const armureArray = [...state.armure];
      const newArmure = action.datas;
      armureArray[armureArray.findIndex(armure => armure._id === action.id)] = newArmure;

      return {
        ...state,
        payload:action.payload,
        armure: armureArray,
        msg:'Your Armors has been successfully updated',
        style:'success'
      };

    case "UPDATE_ARMURE_REJECTED":
      return {...state, payload:action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

    // DEFAULT
    default:
      return state;
  }
};
