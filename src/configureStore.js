import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fortuneReducer } from './reducers/FortuneReducer';
import { blessureReducer } from './reducers/BlessureReducer';

export const configureStore = () => {
    return createStore(combineReducers({
        points: fortuneReducer,
        maxPoints: fortuneReducer,
        blessure: blessureReducer,
        maxBlessure: blessureReducer
    }), composeWithDevTools());
};
