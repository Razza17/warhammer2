import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ArmesTable from '../containers/equipement/ArmesTable';
import MoneyTable from '../containers/equipement/MoneyTable';
import ArmureTable from '../containers/equipement/ArmureTable';
import PointArmureTable from '../containers/equipement/PointArmureTable';
import EncContainer from '../containers/equipement/EncContainer';
import InventaireTable from '../containers/equipement/InventaireTable';
import FolieTable from '../containers/equipement/FolieTable';

export class Equipement extends Component {
  render() {
    return (
      <Grid id="equipement" fluid>
        <Row>
          <Col xs={8} md={4} mdOffset={4}>
            <EncContainer />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5} mdOffset={1}>
            <InventaireTable />
          </Col>
          <Col xs={12} md={5}>
            <MoneyTable />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <ArmesTable />
          </Col>
          <Col xs={12} md={6}>
            <ArmureTable />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={2}>
            <PointArmureTable />
          </Col>
          <Col xs={12} md={2}>
            <FolieTable />
          </Col>
        </Row>
      </Grid>
    )
  }
}
