import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import {Details} from "../components/Details";
import Wolfgang from "../data/Wolfgang.json";

export class DetailsTable extends Component {
    render() {
        return (
            <Col xs={12} md={4}>
                <Panel>
                    {
                        Wolfgang.details.map((details, i) => <Details key={i} {...details} />)
                    }
                </Panel>
            </Col>
        )
    }
}
