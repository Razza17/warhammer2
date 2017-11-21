import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CaracTable from "../containers/personnage/CaracTable";
import CountContainer from "../containers/personnage/CountContainer";
import ArmesTable from '../containers/equipement/ArmesTable';
import ArmureTable from '../containers/equipement/ArmureTable';
import PointArmureTable from '../containers/equipement/PointArmureTable';

export class Combat extends Component {
    render() {
        return (
            <Grid id="equipement" fluid>
                <Row>
                    <Col xs={12} lg={8}>
                        <CaracTable />
                    </Col>
                    <CountContainer />
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <ArmesTable />
                    </Col>
                    <Col xs={12} md={4}>
                        <ArmureTable />
                    </Col>
                    <Col xs={12} md={4}>
                        <PointArmureTable />
                    </Col>
                </Row>
            </Grid>
        )
    }
}