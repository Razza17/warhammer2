import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import {DetailsTable} from "../containers/DetailsTable";
import {ProfilTable} from "../containers/ProfilTable";
import {CaracTable} from "../containers/CaracTable";
import {FortuneTable} from "../containers/FortuneTable";
import {BlessureTable} from "../containers/BlessureTable";
import {MunitionTable} from "../containers/MunitionTable";
import {CompetenceBase} from "../containers/CompetenceBase";
import {CompetenceAvance} from "../containers/CompetenceAvance";
import {TalentTable} from "../containers/TalentTable";

import WarhammerLogo from "../img/WarhammerLogo.png";

export class Personnage extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <ProfilTable />
                    <DetailsTable />
                    <Col lg={4} xsHidden mdHidden>
                        <img src={WarhammerLogo} alt="WarhammerLogo" />
                    </Col>
                </Row>
                <Row>
                    <CaracTable />
                    <FortuneTable />
                    <BlessureTable />
                    <MunitionTable />
                </Row>
                <Row>
                    <CompetenceBase />
                    <CompetenceAvance />
                    <TalentTable/>
                </Row>
            </Grid>
        )
    }
}