import { FORTUNE_INCREMENT } from "../constants/Constants";
import { FORTUNE_DECREMENT } from "../constants/Constants";

export const fortune = (state = {}, action) => {
  switch (action.type) {
      case FORTUNE_INCREMENT:
          return {
              ...state,
              points: action.points + 1
          };
      case FORTUNE_DECREMENT:
          return {
              ...state,
              points: action.points - 1
          };
      default:
          return state;
  }
};