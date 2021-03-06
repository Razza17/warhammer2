export function talentReducer(state={talent:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_TALENT":
      return {...state, talent:[...action.payload]};

    case "GET_TALENT_REJECTED":
      return action.payload;

    // POST
    case "POST_TALENT":
      return {...state, talent:[...state.talent, action.payload]};

    case "POST_TALENT_REJECTED":
      return action.payload;

    // UPDATE
    case "UPDATE_TALENT":
      const newArray = [...state.talent]
      const newItem = action.datas
      newArray[newArray.findIndex(item => item._id === action.id)] = newItem
      return {
        ...state,
        payload:action.payload,
        talent:newArray,
        msg:'Your talents has been successfully updated',
        style:'success'
      };

    case "UPDATE_TALENT_REJECTED":
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
