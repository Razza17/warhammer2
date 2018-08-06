import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProfilRecap from "../components/recap/ProfilRecap";
import DetailsRecap from "../components/recap/DetailsRecap";
import CountRecap from "../components/recap/CountRecap";
import CaracRecap from "../components/recap/CaracRecap";
import CompBaseRecap from "../components/recap/CompBaseRecap";
import CompAvanceRecap from "../components/recap/CompAvanceRecap";
import TalentRecap from "../components/recap/TalentRecap";
import ArmeRecap from "../components/recap/ArmeRecap";
import ArmureRecap from "../components/recap/ArmureRecap";
import InventaireRecap from "../components/recap/InventaireRecap";

export class Recap extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso
    }
  }

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
            <Button><Link to={"/personnage?pseudo="+this.state.user+"&perso="+this.state.perso}>Aller au combat</Link></Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}
