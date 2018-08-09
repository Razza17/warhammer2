import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import CreaCarac from "../components/creation/CreaCarac";

export class CreationCarac extends Component {
  render() {
    return (
      <Grid id="creaCarac" fluid>
        <CreaCarac />
      </Grid>
    )
  }
}
