import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProfilRecap from "../containers/recap/ProfilRecap";
import DetailsRecap from "../containers/recap/DetailsRecap";
import CountRecap from "../containers/recap/CountRecap";
import CaracRecap from "../containers/recap/CaracRecap";
import CompBaseRecap from "../containers/recap/CompBaseRecap";
import CompAvanceRecap from "../containers/recap/CompAvanceRecap";
import TalentRecap from "../containers/recap/TalentRecap";
import ArmeRecap from "../containers/recap/ArmeRecap";
import ArmureRecap from "../containers/recap/ArmureRecap";
import InventaireRecap from "../containers/recap/InventaireRecap";

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
          <Col xs={12} md={8}>
            <ArmeRecap />
          </Col>
          <Col xs={12} md={8}>
            <ArmureRecap />
          </Col>
          <Col xs={12} md={8}>
            <InventaireRecap />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} mdOffset={3} className="text-center">
            <Button><Link to={"/personnage"}>Aller au combat</Link></Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}
