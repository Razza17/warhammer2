import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import CreaInventaire from "../components/creation/CreaInventaire";

export class CreationInventaire extends Component {
  render() {
    return (
      <Grid id="creaInvantaire" fluid>
        <Row>
          <CreaInventaire />
        </Row>
      </Grid>
    )
  }
}
