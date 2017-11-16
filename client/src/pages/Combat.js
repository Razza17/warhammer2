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
                    <CaracTable />
                    <CountContainer />
                </Row>
                <Row>
                    <ArmesTable />
                    <Col xs={12} md={6}>
                        <ArmureTable />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        <PointArmureTable />
                    </Col>
                </Row>
            </Grid>
        )
    }
}