import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import {Details} from "../components/Details";
import Wolfgang from "../data/Wolfgang.json";

export class DetailsTable extends Component {
    render() {
        return (
            <Col xs={12} md={4}>
                <Table condensed bordered hover>
                    <thead>
                        <tr><th colSpan="2" className="text-center">Détails Personnels</th></tr>
                    </thead>
                    {
                        Wolfgang.details.map((details, i) =>
                        <Details key={i} {...details} />
                        )
                    }
                </Table>
            </Col>
        )
    }
}