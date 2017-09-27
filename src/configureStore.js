import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fortune } from './reducers/Fortune';

export const configureStore = () => {
    return createStore(combineReducers({
        fortune
    }), composeWithDevTools());
};