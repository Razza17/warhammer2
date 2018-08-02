import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ProfilRecap from "../components/recap/ProfilRecap";
import DetailsRecap from "../components/recap/DetailsRecap";
import CountRecap from "../components/recap/CountRecap";
import CaracRecap from "../components/recap/CaracRecap";
import CompBaseRecap from "../components/recap/CompBaseRecap";
import CompAvanceRecap from "../components/recap/CompAvanceRecap";
import TalentRecap from "../components/recap/TalentRecap";

export class Recap extends Component {
  render() {
    return (
      <Grid id="recap" fluid>
        <h2 className="align-center">Récapitulatif de ton personnage</h2>
        <Row>
          <Col xs={12} sm={6} md={4} mdOffset={2}>
            <ProfilRecap />
            <CountRecap />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <DetailsRecap />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <CaracRecap />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <CompBaseRecap />
          </Col>
          <Col xs={12} md={4}>
            <CompAvanceRecap />
          </Col>
          <Col xs={12} md={4}>
            <TalentRecap />
          </Col>
        </Row>
      </Grid>
    )
  }
}
