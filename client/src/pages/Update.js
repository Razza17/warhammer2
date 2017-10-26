import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

//import CaracTableUpdate from '../containers/update/CaracTableUpdate';
import ProfilTableUpdate from '../containers/update/ProfilTableUpdate';

export class Update extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <ProfilTableUpdate />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
