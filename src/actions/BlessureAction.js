import { BLESSURE_INCREMENT, BLESSURE_DECREMENT } from "../constants/Constants";

export const blessureIncrement = (blessure, unit) => ({
    type: BLESSURE_INCREMENT,
    blessure: blessure + unit
});

export const blessureDecrement = (blessure, unit) => ({
    type: BLESSURE_DECREMENT,
    blessure: blessure - unit
});
