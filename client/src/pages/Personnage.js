import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import ProfilTable from "../containers/personnage/ProfilTable";
import DetailsTable from "../containers/personnage/DetailsTable";
import CaracTable from "../containers/personnage/CaracTable";
import CountContainer from "../containers/personnage/CountContainer";
import CompetenceBase from "../containers/personnage/CompetenceBase";
import CompetenceAvance from "../containers/personnage/CompetenceAvance";
import TalentTable from "../containers/personnage/TalentTable";

import WarhammerLogo from "../img/WarhammerLogo.png";

export class Personnage extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <ProfilTable />
                    <DetailsTable />
                    <Col xsHidden smHidden mdHidden lg={4}>
                        <Image src={WarhammerLogo} alt="WarhammerLogo" />
                    </Col>
                </Row>
                <Row>
                    <CaracTable />
                    <CountContainer />
                </Row>
                <Row>
                    <CompetenceBase />
                    <CompetenceAvance />
                    <Col xs={12} md={6} lg={4}>
                        <TalentTable/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
