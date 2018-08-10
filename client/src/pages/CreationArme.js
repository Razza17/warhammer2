import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import CreaArme from "../components/creation/CreaArme";

export class CreationArme extends Component {
  render() {
    return (
      <Grid id="creaArme" className="vertical-middle" fluid>
        <CreaArme />
      </Grid>
    )
  }
}
