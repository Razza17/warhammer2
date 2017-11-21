import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import ProfilTable from "../containers/personnage/ProfilTable";
import DetailsTable from "../containers/personnage/DetailsTable";
import CaracTable from "../containers/personnage/CaracTable";
import CountContainer from "../containers/personnage/CountContainer";
import CompetenceBase from "../containers/personnage/CompetenceBase";
import CompetenceAvance from "../containers/personnage/CompetenceAvance";
import TalentTable from "../containers/personnage/TalentTable";

import WarhammerLogo from "../img/Warhammer-Logo.jpg";

export class Personnage extends Component {
    render() {
        return (
            <Grid id="personnage" fluid>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <ProfilTable />
                    </Col>
                    <Col xs={12} sm={6} md={8} lg={4}>
                        <DetailsTable />
                    </Col>
                    <Col xsHidden smHidden mdHidden lg={4}>
                        <Image src={WarhammerLogo} alt="WarhammerLogo" width="100%" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={8}>
                        <CaracTable />
                    </Col>
                    <CountContainer />
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <CompetenceBase />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CompetenceAvance />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <TalentTable/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
