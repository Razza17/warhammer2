import { combineReducers } from 'redux';
import { fortuneReducer } from './FortuneReducer';
import { blessureReducer } from './BlessureReducer';
import { moneyReducer } from './MoneyReducer';
import { profilReducer } from './ProfilReducer';
import { detailReducer } from './DetailReducer';

export default combineReducers({
    points: fortuneReducer,
    maxPoints: fortuneReducer,
    blessure: blessureReducer,
    maxBlessure: blessureReducer,
    couronne: moneyReducer,
    pistole: moneyReducer,
    sous: moneyReducer,
    profile: profilReducer,
    details: detailReducer
})
