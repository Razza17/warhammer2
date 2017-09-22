import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import {Profil} from "../components/Profil";
import Wolfgang from "../data/Wolfgang.json";

export class ProfilTable extends Component {
    render() {
        return (
            <Col xs={12} md={4}>
                <Table condensed bordered hover>
                    <thead>
                        <tr><th colSpan="2" className="text-center">Personnage</th></tr>
                    </thead>
                    {
                        Wolfgang.personnage.map((perso, i) =>
                        <Profil key={i} {...perso} />
                        )
                    }
                </Table>
            </Col>
        )
    }
}