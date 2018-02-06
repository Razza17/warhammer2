import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ProfilRecap from "../containers/recap/ProfilRecap";

export class Recap extends Component {
    render() {
        return (
            <Grid id="recap" fluid>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <ProfilRecap />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
