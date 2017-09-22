import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import { Talent } from "../components/Talent";
import Wolfgang from '../data/Wolfgang.json';

export class TalentTable extends Component {
    render () {
        return (
            <Col xs={12} md={4}>
                <Table condensed hover className="border">
                    <thead>
                        <tr>
                            <th className="text-center">Talents</th>
                            <th className="text-center">Description</th>
                            <th className="text-center">Compétences</th>
                            <th className="text-center">Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Wolfgang.talents.map((talents, i) =>
                            <Talent key={i} {...talents}/>
                        )
                    }
                    </tbody>
                </Table>
            </Col>
        )
    }
}