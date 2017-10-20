import { BLESSURE_INCREMENT, BLESSURE_DECREMENT } from "../constants/Constants";
import Wolfgang from '../data/Wolfgang';

export const blessureReducer = (state = {
  blessure:Wolfgang.pointBlessure,
  maxBlessure: Wolfgang.actuel
}, action) => {
  switch (action.type) {
      case BLESSURE_INCREMENT:
          return {
              ...state,
              blessure: action.blessure,
          };
      case BLESSURE_DECREMENT:
          return {
              ...state,
              blessure: action.blessure
          };
      default:
          return state;
  }
};
