import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export const updateMessage = (InnerComponent) => {
  class UpdateMessage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        status: "hide",
        msg: "",
        style: "info"
      };
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.modified !== undefined && nextProps.modified.nModified === 1) {
        this.setState({
          status: "show",
          msg: nextProps.msg,
          style: nextProps.style
        });

        setTimeout(() => {
          this.setState({
            status: "hide",
            msg: "",
            style: "info"
          })
        }, 3000);

      } else if(nextProps.modified !== undefined && nextProps.modified.nModified === 0) {
        this.setState({
          status: "show",
          msg: "Nothing changed, please update an item !!!!",
          style: "info"
        });

        setTimeout(() => {
          this.setState({
            status: "hide",
            msg: "",
            style: "info"
          })
        }, 3000);
      }

      return true;
    }

    render() {
      const { ...passThroughProps } = this.props;

      return (
        <div>
          <InnerComponent {...passThroughProps}/>
          <Alert className={this.state.status} bsStyle={this.state.style}>
            {this.state.msg}
          </Alert>
        </div>
      )
    }
  }

  return UpdateMessage;
};
