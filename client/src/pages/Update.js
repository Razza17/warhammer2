import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CaracTableUpdate from '../containers/update/CaracTableUpdate';
import CaracTableUpdateMobile from '../containers/update/CaracTableUpdateMobile';
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
                    <ProfilTableUpdate />
                    <EncContainer />
                    <ExperienceTableUpdate />
                </Row>
                <Row>
                    <Col xsHidden smHidden md={12}>
                        <CaracTableUpdate />
                    </Col>
                    <Col xs={12} mdHidden lgHidden>
                        <CaracTableUpdateMobile />
                    </Col>
                </Row>
                <Row>
                    <ArmesTableUpdate />
                    <ArmureTableUpdate />
                </Row>
                <Row>
                    <CompetenceTableBaseUpdate />
                    <CompetenceTableAvanceUpdate />
                </Row>
                <Row>
                    <TalentTableUpdate />
                    <InventaireTableUpdate />
                </Row>
                <Row>
                    <FolieTableUpdate />
                </Row>
            </Grid>
        )
    }
}
