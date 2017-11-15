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
import { talentReducer } from "./TalentReducer";
import { armeReducer } from "./ArmeReducer";
import { armureReducer } from "./ArmureReducer";
import { inventaireReducer } from "./InventaireReducer";
import { folieReducer } from "./FolieReducer";
import { experienceReducer } from "./ExperienceReducer";

export default combineReducers({
    profile: profilReducer,
    details: detailReducer,
    caracBase: caracBaseReducer,
    caracAvance: caracAvanceReducer,
    caracActuel: caracActuelReducer,
    count: countReducer,
    compBase: compBaseReducer,
    compAvance: compAvanceReducer,
    talent: talentReducer,
    arme: armeReducer,
    armure: armureReducer,
    money: moneyReducer,
    inventaire: inventaireReducer,
    folie: folieReducer,
    experience: experienceReducer
})
