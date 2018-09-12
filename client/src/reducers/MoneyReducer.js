export function moneyReducer(state={money:[]}, action) {
  switch(action.type) {
    // GET
    case "GET_MONEY":
      return {...state, money:[...action.payload]};

    case "GET_MONEY_REJECTED":
      return action.payload;

    // POST
    case "POST_MONEY":
      return {...state, money:[...state.money, action.payload]};

    case "POST_MONEY_REJECTED":
      return action.payload;

    // UPDATE
    case "UPDATE_MONEY":
      const moneyArray = [...state.money];
      const newMoney = action.datas;
      moneyArray[moneyArray.findIndex(money => money._id === action.id)] = newMoney;
      return {...state, money:moneyArray};

    case "UPDATE_MONEY_REJECTED":
      return action.payload;

    // DEFAULT
    default:
      return state;
  }
};
