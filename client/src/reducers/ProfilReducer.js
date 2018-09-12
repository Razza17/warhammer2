export function profilReducer(state={profile:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_PROFILE":
      return {...state, profile:[...action.payload]};

    case "GET_PROFILE_REJECTED":
      return action.payload;

    // POST
    case "POST_PROFILE":
      return {...state, profile:[...state.profile, action.payload]};

    case "POST_PROFILE_REJECTED":
      return action.payload;

    // UPDATE
    case "UPDATE_PROFILE":
      const newArray = [...state.profile]
      const newItem = action.datas
      newArray[newArray.findIndex(item => item._id === action.id)] = newItem
      return {
        ...state,
        profile:newArray,
        payload:action.payload,
        msg:'Your Profile has been successfully updated',
        style:'success'
      };

    case "UPDATE_PROFILE_REJECTED":
      return {
        ...state,
        ...action.payload,
        msg:'Oups something went wrong ! Maybe try again ;-)',
        style:'danger'
      };

    // RENAME
    case "RENAME_PROFILE":
      return {...state, ...action.payload, msg:'Your Profile has been successfully updated', style:'success'};

    case "RENAME_PROFILE_REJECTED":
      return {...state, ...action.payload, msg:'Oups something went wrong ! Maybe try again ;-)', style:'danger'};

    // DEFAULT
    default:
    return state;
  }
}
