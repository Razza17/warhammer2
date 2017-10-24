import { FORTUNE_INCREMENT, FORTUNE_DECREMENT } from "../constants/Constants";
import Wolfgang from '../data/Wolfgang';

export const fortuneReducer = (state = {
  points: Wolfgang.pointFortune,
  maxPoints: Wolfgang.actuel
}, action) => {
  switch (action.type) {
      case FORTUNE_INCREMENT:
          return {
              ...state,
              points: action.points,
          };
      case FORTUNE_DECREMENT:
          return {
              ...state,
              points: action.points
          };
      default:
          return state;
  }
};
