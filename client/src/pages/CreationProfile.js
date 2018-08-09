import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import CreaProfil from "../components/creation/CreaProfil";

export class CreationProfile extends Component {
  render() {
    return (
      <Grid id="creaProfile" fluid>
        <CreaProfil />
      </Grid>
    )
  }
}
