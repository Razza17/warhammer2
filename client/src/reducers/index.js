import { combineReducers } from 'redux';
import { countReducer } from './CountReducer';
import { moneyReducer } from './MoneyReducer';
import { profilReducer } from './ProfilReducer';
import { detailReducer } from './DetailReducer';
import { caracReducer } from "./CaracReducer";
import { compBaseReducer } from "./CompBaseReducer";
import { compAvanceReducer } from "./CompAvanceReducer";
import { talentReducer } from "./TalentReducer";
import { armeReducer } from "./ArmeReducer";
import { armureReducer } from "./ArmureReducer";
import { inventaireReducer } from "./InventaireReducer";
import { folieReducer } from "./FolieReducer";
import { experienceReducer } from "./ExperienceReducer";
import { persoReducer } from "./PersoReducer";
import { errorReducer } from './ErrorReducer';
import { authReducer } from './AuthReducer';

export default combineReducers({
    profile: profilReducer,
    details: detailReducer,
    carac: caracReducer,
    count: countReducer,
    compBase: compBaseReducer,
    compAvance: compAvanceReducer,
    talent: talentReducer,
    arme: armeReducer,
    armure: armureReducer,
    money: moneyReducer,
    inventaire: inventaireReducer,
    folie: folieReducer,
    experience: experienceReducer,
    perso: persoReducer,
    errors: errorReducer,
    auth: authReducer
})
