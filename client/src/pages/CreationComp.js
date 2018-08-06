import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import CreaComp from "../components/creation/CreaComp";

export class CreationComp extends Component {
  render() {
    return (
      <Grid id="creaComp" fluid>
        <Row>
          <CreaComp />
        </Row>
      </Grid>
    )
  }
}
