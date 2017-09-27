import { connect } from 'react-redux';

import { Fortune } from '../components/Fortune';
import { fortuneSelector } from "../selectors/index";


const mapStateToProps = (state) => ({
   points: fortuneSelector(state).points
});

export const FortuneTable = connect(mapStateToProps) (Fortune);