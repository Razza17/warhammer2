import { FORTUNE_INCREMENT, FORTUNE_DECREMENT } from "../constants/Constants";

export const fortuneIncrement = (points) => ({
   type: FORTUNE_INCREMENT,
   points
});

export const fortuneDecrement = (points) => ({
    type: FORTUNE_DECREMENT,
    points
});