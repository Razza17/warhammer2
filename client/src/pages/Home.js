import React, { Component } from 'react';
import { Grid, Col, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <Grid id="home" className="vertical-middle" fluid>
        <Col xs={12}>
          <h1 className="align-center">Bienvenue sur Warhammer !</h1>
          <Col xs={6} lg={3} lgOffset={3} className="home-panel">
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h2">Tu es déjà un guerrier</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <h3 className="align-center">
                  <Link to="/login">Pour te connecter c'est ici</Link>
                </h3>
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={6} lg={3} className="home-panel">
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h2">Tu veux devenir un guerrier</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <h3 className="align-center">
                  <Link to="/logup">Pour créer un compte c'est ici</Link>
                </h3>
              </Panel.Body>
            </Panel>
          </Col>
        </Col>
      </Grid>
    )
  }
}
