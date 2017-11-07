import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CaracTableUpdate from '../containers/update/CaracTableUpdate';
import ProfilTableUpdate from '../containers/update/ProfilTableUpdate';
import ArmesTableUpdate from '../containers/update/ArmesTableUpdate';
import ArmureTableUpdate from '../containers/update/ArmureTableUpdate';
import EncContainer from '../containers/equipement/EncContainer';

export class Update extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <EncContainer />
                    <ProfilTableUpdate />
                </Row>
                <Row>
                    <Col xs={12}>
                        <CaracTableUpdate />
                    </Col>
                </Row>
                <Row>
                    <ArmesTableUpdate />
                    <ArmureTableUpdate />
                </Row>
            </Grid>
        )
    }
}
