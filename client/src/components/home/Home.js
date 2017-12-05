import React, { Component } from 'react';
import { Grid, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <Grid fluid>
                <Col xs={12}>
                    <h1 className="align-center">Bienvenue Guerrier</h1>
                    <Col xs={6}>
                        <h3>
                            Pour te connecter c'est par ici : <br/><Link to="/login"><Button>Se connecter</Button></Link>
                        </h3>
                    </Col>
                    <Col xs={6}>
                        <h3>
                            Sinon pour créer un compte c'est par ici : <br/> <Link to="/logup"><Button>Créer un compte</Button></Link>
                        </h3>
                    </Col>
                </Col>
            </Grid>
        )
    }
}