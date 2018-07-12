import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import CreaCompTable from "../containers/creation/CreaCompTable";

export class CreationComp extends Component {
  render() {
    return (
      <Grid id="creaComp" fluid>
        <Row>
          <CreaCompTable />
        </Row>
      </Grid>
    )
  }
}
