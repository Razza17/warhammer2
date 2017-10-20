import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import {DetailsTable} from "../containers/personnage/DetailsTable";
import {ProfilTable} from "../containers/personnage/ProfilTable";
import {CaracTable} from "../containers/personnage/CaracTable";
import {CaracTableM} from "../containers/personnage/CaracTableM";
import Fortune from "../components/personnage/Fortune";
import BlessureTable from "../containers/personnage/BlessureTable";
import {MunitionTable} from "../containers/personnage/MunitionTable";
import {CompetenceBase} from "../containers/personnage/CompetenceBase";
import {CompetenceBaseM} from "../containers/personnage/CompetenceBaseM";
import {CompetenceAvance} from "../containers/personnage/CompetenceAvance";
import {CompetenceAvanceM} from "../containers/personnage/CompetenceAvanceM";
import {TalentTable} from "../containers/personnage/TalentTable";

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
