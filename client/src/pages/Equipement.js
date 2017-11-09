import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ArmesTable from '../containers/equipement/ArmesTable';
import MoneyTable from '../containers/equipement/MoneyTable';
import ArmureTable from '../containers/equipement/ArmureTable';
import PointArmureTable from '../containers/equipement/PointArmureTable';
import EncContainer from '../containers/equipement/EncContainer';
import InventaireTable from '../containers/equipement/InventaireTable';

export class Equipement extends Component {
    render() {
        return (
            <Grid id="equipement" fluid>
                <Row>
                    <EncContainer />
                </Row>
                <Row>
                    <ArmesTable />
                    <Col xs={12} md={6}>
                        <MoneyTable />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                        <ArmureTable />
                    </Col>
                    <Col xs={12} md={4}>
                        <PointArmureTable />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        <InventaireTable />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
