import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, InputGroup, Button, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { updateCount, getCount } from "../../actions/CountAction";
import { updateMessage } from "../../hocs/updateMessage";

class CountRecap extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getCount(userID, userPersoID);
  }

  updateCount() {
    let id = findDOMNode(this.refs.countId).value;
    let newData = {
      name: "Munitions",
      value: findDOMNode(this.refs.countValue).value
    };
    this.props.updateCount(id, newData);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Munitions</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {this.props.count.map((counts, i) =>
            counts.name === "Munitions" &&
            <Form key={i} inline>
              <FormGroup className="hide" controlId="countId">
                <InputGroup>
                  <InputGroup.Addon>Id :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="countId"
                    defaultValue={counts._id}
                    ref='countId'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <Col xs={6} md={5} mdOffset={2}>
                <FormGroup controlId="countValue">
                  <InputGroup>
                    <InputGroup.Addon>{counts.name}</InputGroup.Addon>
                    <FormControl
                      type='number'
                      name='countValue'
                      defaultValue={counts.value}
                      ref='countValue'
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={6} md={5}>
                <Button onClick={this.updateCount.bind(this)}>Modifier</Button>
              </Col>
            </Form>
          )}
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state){
  return {
    count: state.count.count
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCount, getCount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CountRecap));
