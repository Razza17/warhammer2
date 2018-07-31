import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import CreaArme from "../components/creation/CreaArme";

export class CreationArme extends Component {
  render() {
    return (
      <Grid id="creaArme" fluid>
        <Row>
          <CreaArme />
        </Row>
      </Grid>
    )
  }
}
