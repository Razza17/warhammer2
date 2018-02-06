import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CaracTableUpdate from '../containers/update/CaracTableUpdate';
import ProfilTableUpdate from '../containers/update/ProfilTableUpdate';
import ArmesTableUpdate from '../containers/update/ArmesTableUpdate';
import ArmureTableUpdate from '../containers/update/ArmureTableUpdate';
import EncContainer from '../containers/equipement/EncContainer';
import CompetenceTableBaseUpdate from '../containers/update/CompetenceTableBaseUpdate';
import CompetenceTableAvanceUpdate from '../containers/update/CompetenceTableAvanceUpdate';
import TalentTableUpdate from "../containers/update/TalentTableUpdate";
import InventaireTableUpdate from "../containers/update/InventaireTableUpdate";
import FolieTableUpdate from "../containers/update/FolieTableUpdate";
import ExperienceTableUpdate from "../containers/update/ExperienceTableUpdate";

export class Update extends Component {
    render() {
        return (
            <Grid id="update" fluid>
                <Row>
                    <Col xs={8} md={4}>
                        <ProfilTableUpdate />
                    </Col>
                    <Col xs={8} md={4}>
                        <EncContainer />
                    </Col>
                    <Col xs={8} md={4}>
                        <ExperienceTableUpdate />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CaracTableUpdate />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <ArmesTableUpdate />
                    </Col>
                    <Col xs={12} md={6}>
                        <ArmureTableUpdate />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <CompetenceTableBaseUpdate />
                    </Col>
                    <Col xs={12} md={6}>
                        <CompetenceTableAvanceUpdate />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <TalentTableUpdate />
                    </Col>
                    <Col xs={12} md={6}>
                        <InventaireTableUpdate />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <FolieTableUpdate />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
