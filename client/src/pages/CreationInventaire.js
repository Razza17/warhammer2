import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import CreaInventaire from "../components/creation/CreaInventaire";

export class CreationInventaire extends Component {
  render() {
    return (
      <Grid id="creaInvantaire" className="vertical-middle" fluid>
        <CreaInventaire />
      </Grid>
    )
  }
}
