import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import CreaComp from "../components/creation/CreaComp";

export class CreationComp extends Component {
  render() {
    return (
      <Grid id="creaComp" className="vertical-middle" fluid>
        <CreaComp />
      </Grid>
    )
  }
}
