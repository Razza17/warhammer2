import { combineReducers } from 'redux';
import { countReducer } from './CountReducer';
import { moneyReducer } from './MoneyReducer';
import { profilReducer } from './ProfilReducer';
import { detailReducer } from './DetailReducer';
import { caracBaseReducer } from "./CaracBaseReducer";
import { caracAvanceReducer } from "./CaracAvanceReducer";
import { caracActuelReducer } from "./CaracActuelReducer";
import { compBaseReducer } from "./CompBaseReducer";
import { compAvanceReducer } from "./CompAvanceReducer";

export default combineReducers({
    couronne: moneyReducer,
    pistole: moneyReducer,
    sous: moneyReducer,
    profile: profilReducer,
    details: detailReducer,
    caracBase: caracBaseReducer,
    caracAvance: caracAvanceReducer,
    caracActuel: caracActuelReducer,
    count: countReducer,
    compBase: compBaseReducer,
    compAvance: compAvanceReducer
})
