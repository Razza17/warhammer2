import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fortuneReducer } from './reducers/FortuneReducer';

export const configureStore = () => {
    return createStore(combineReducers({
        points: fortuneReducer,
        maxPoints: fortuneReducer
    }), composeWithDevTools());
};