import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, FormGroup, FormControl, Button, PanelGroup, Panel } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import { loginUser } from '../../actions/Authentication';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginUser(user, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors.response.data
      });
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <Grid id="login" className="vertical-middle" fluid>
        <Col xs={6} xsOffset={3} md={4} mdOffset={4}>
          <PanelGroup id="signinPanel">
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h2">Connecte toi</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <FormGroup controlId="email">
                  <FormControl
                    type='email'
                    placeholder="Entre ton email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email } />
                  {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </FormGroup>
                <FormGroup controlId="password">
                  <FormControl
                    type='password'
                    placeholder="Entre ton mot de passe"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password } />
                  {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </FormGroup>
                <Button onClick={this.handleSubmit}>Envoyer</Button>
              </Panel.Body>
            </Panel>
          </PanelGroup>
        </Col>
      </Grid>
    )
  }
}

Signin.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    loginUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
