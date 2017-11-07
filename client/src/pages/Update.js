import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CaracTableUpdate from '../containers/update/CaracTableUpdate';
import CaracTableUpdateMobile from '../containers/update/CaracTableUpdateMobile';
import ProfilTableUpdate from '../containers/update/ProfilTableUpdate';
import ArmesTableUpdate from '../containers/update/ArmesTableUpdate';
import ArmureTableUpdate from '../containers/update/ArmureTableUpdate';
import EncContainer from '../containers/equipement/EncContainer';

export class Update extends Component {
    render() {
        return (
            <Grid id="update" fluid>
                <Row>
                    <ProfilTableUpdate />
                </Row>
                <Row>
                    <Col xsHidden smHidden md={12}>
                        <CaracTableUpdate />
                    </Col>
                    <Col xs={12} mdHidden lgHidden>
                        <CaracTableUpdateMobile />
                    </Col>
                </Row>
                <Row>
                    <EncContainer />
                </Row>
                <Row>
                    <ArmesTableUpdate />
                    <ArmureTableUpdate />
                </Row>
            </Grid>
        )
    }
}
