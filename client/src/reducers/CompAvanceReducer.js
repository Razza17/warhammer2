export function compAvanceReducer(state={compAvance:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_COMPAVANCE":
      return {...state, compAvance:[...action.payload]};

    case "GET_COMPAVANCE_REJECTED":
      return action.payload;

    // POST
    case "POST_COMPAVANCE":
      return {...state, compAvance:[...state.compAvance, action.payload]};

    case "POST_COMPAVANCE_REJECTED":
      return action.payload;

    // UPDATE
    case "UPDATE_COMPAVANCE":
      const newArray = [...state.compAvance]
      const newItem = action.datas
      newArray[newArray.findIndex(item => item._id === action.id)] = newItem
      return {
        ...state,
        payload:action.payload,
        compAvance:newArray,
        msg:'Your advanced skills has been successfully updated',
        style:'success'
      };

    case "UPDATE_COMPAVANCE_REJECTED":
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
