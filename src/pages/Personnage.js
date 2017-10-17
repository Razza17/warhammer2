import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import {DetailsTable} from "../containers/DetailsTable";
import {ProfilTable} from "../containers/ProfilTable";
import {CaracTable} from "../containers/CaracTable";
import {CaracTableM} from "../containers/CaracTableM";
import Fortune from "../components/Fortune";
import BlessureTable from "../containers/BlessureTable";
import {MunitionTable} from "../containers/MunitionTable";
import {CompetenceBase} from "../containers/CompetenceBase";
import {CompetenceBaseM} from "../containers/CompetenceBaseM";
import {CompetenceAvance} from "../containers/CompetenceAvance";
import {CompetenceAvanceM} from "../containers/CompetenceAvanceM";
import {TalentTable} from "../containers/TalentTable";

import WarhammerLogo from "../img/WarhammerLogo.png";

export class Personnage extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <ProfilTable />
                    <DetailsTable />
                    <Col xsHidden smHidden md={4}>
                        <img src={WarhammerLogo} alt="WarhammerLogo" />
                    </Col>
                </Row>
                <Row>
                    <Col xsHidden smHidden md={7}>
                        <CaracTable />
                    </Col>
                    <Col xs={12} mdHidden lgHidden>
                        <CaracTableM />
                    </Col>
                    <Fortune />
                    <BlessureTable />
                    <MunitionTable />
                </Row>
                <Row>
                    <Col xsHidden smHidden md={6} lg={4}>
                        <CompetenceBase />
                    </Col>
                    <Col xs={12} mdHidden lgHidden>
                        <CompetenceBaseM />
                    </Col>
                    <Col xsHidden smHidden md={6} lg={4}>
                        <CompetenceAvance />
                    </Col>
                    <Col xs={12} mdHidden lgHidden>
                        <CompetenceAvanceM />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <TalentTable/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
