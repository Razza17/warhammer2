import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { ArmesTable } from '../containers/equipement/ArmesTable';
import { ArmureTable } from '../containers/equipement/ArmureTable';

export class Equipement extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <ArmesTable />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <ArmureTable />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
