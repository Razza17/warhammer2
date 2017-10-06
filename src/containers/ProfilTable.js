import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import {Profil} from "../components/Profil";
import Wolfgang from "../data/Wolfgang.json";

export class ProfilTable extends Component {
    render() {
        return (
            <Col xs={12} md={4}>
                <Panel>
                    <h3 className="text-center">Personnage</h3>
                    {
                        Wolfgang.personnage.map((perso, i) => <Profil key={i} {...perso} />)
                    }
                </Panel>
            </Col>
        )
    }
}
