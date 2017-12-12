import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import CreaProfil from "../components/creation/CreaProfil";
import CreaCarac from "../components/creation/CreaCarac";

export class Creation extends Component {
    render() {
        return (
            <Grid id="creation" fluid>
                <Row>
                    <CreaProfil />
                </Row>
                <Row>
                    <CreaCarac />
                </Row>
            </Grid>
        )
    }
}
