import { CO_INCREMENT, CO_DECREMENT, PA_INCREMENT, PA_DECREMENT, REMOVE_CO, ADD_CO } from "../constants/Constants";
import Wolfgang from '../data/Wolfgang';

export const moneyReducer = (state = {
    couronne: Wolfgang.money[0].couronnes,
    pistole: Wolfgang.money[0].pistoles,
    sous: Wolfgang.money[0].sous
}, action) => {
  switch (action.type) {
      case CO_INCREMENT:
          return {
              ...state,
              couronne: action.couronne,
              pistole: action.pistole
          };
      case CO_DECREMENT:
          return {
              ...state,
              couronne: action.couronne,
              pistole: action.pistole
          };
      case PA_INCREMENT:
          return {
              ...state,
              pistole: action.pistole,
              sous: action.sous
          };
      case PA_DECREMENT:
          return {
              ...state,
              pistole: action.pistole,
              sous: action.sous
          };
      case REMOVE_CO:
          return {
              ...state,
              couronne: action.couronne
          };
      case ADD_CO:
          return {
              ...state,
              couronne: action.couronne
          };
      default:
          return state;
  }
};
