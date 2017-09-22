import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { carac } from "./reducers/carac";


export const configureStore = () => {
    return createStore(combineReducers({
        carac,
    }), composeWithDevTools());
};