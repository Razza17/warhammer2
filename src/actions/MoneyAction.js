import { CO_INCREMENT, CO_DECREMENT, PA_INCREMENT, PA_DECREMENT, REMOVE_CO, ADD_CO } from "../constants/Constants";

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
