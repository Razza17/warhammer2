import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ArmesTable from '../containers/equipement/ArmesTable';
import MoneyTable from '../containers/equipement/MoneyTable';
import ArmureTable from '../containers/equipement/ArmureTable';
import PointArmureTable from '../containers/equipement/PointArmureTable';

export class Equipement extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <ArmesTable />
                    <Col xs={12} md={6}>
                        <MoneyTable />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <ArmureTable />
                    </Col>
                    <Col xs={12} md={6}>
                        <PointArmureTable />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
