import {
    CO_INCREMENT,
    CO_DECREMENT,
    PA_INCREMENT,
    PA_DECREMENT,
    REMOVE_CO,
    ADD_CO,
    REMOVE_PA,
    ADD_PA,
    REMOVE_SO,
    ADD_SO
} from "../constants/Constants";

export const coIncrement = (couronne, pistole) => ({
    type: CO_INCREMENT,
    couronne: couronne + 1,
    pistole: pistole - 20
});

export const coDecrement = (couronne, pistole) => ({
    type: CO_DECREMENT,
    couronne: couronne - 1,
    pistole: pistole + 20
});

export const paIncrement = (pistole, sous) => ({
    type: PA_INCREMENT,
    pistole: pistole + 1,
    sous: sous - 12

});

export const paDecrement = (pistole, sous) => ({
    type: PA_DECREMENT,
    pistole: pistole - 1,
    sous: sous + 12
});

export const removeCo = (couronne) => ({
    type: REMOVE_CO,
    couronne: couronne - 1
});

export const addCo = (couronne) => ({
    type: ADD_CO,
    couronne: couronne + 1
});

export const removePa = (pistole) => ({
    type: REMOVE_PA,
    pistole: pistole - 1
});

export const addPa = (pistole) => ({
    type: ADD_PA,
    pistole: pistole + 1
});

export const removeSo = (sous) => ({
    type: REMOVE_SO,
    sous: sous - 1
});

export const addSo = (sous) => ({
    type: ADD_SO,
    sous: sous + 1
});
