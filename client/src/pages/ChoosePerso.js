import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';

import ChooseTable from '../containers/home/ChooseTable';

export class ChoosePerso extends Component {
  render() {
    return (
      <Grid id="choose" fluid>
        <Col xs={12} md={4} mdOffset={4}>
          <ChooseTable />
        </Col>
      </Grid>
    )
  }
}
