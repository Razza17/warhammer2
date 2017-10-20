import { FORTUNE_INCREMENT, FORTUNE_DECREMENT } from "../constants/Constants";

export const fortuneIncrement = (points, unit) => ({
    type: FORTUNE_INCREMENT,
    points: points + unit
});

export const fortuneDecrement = (points, unit) => ({
    type: FORTUNE_DECREMENT,
    points: points - unit
});
