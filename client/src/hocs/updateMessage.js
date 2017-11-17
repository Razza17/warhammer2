import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export const updateMessage = (InnerComponent) => {
    class UpdateMessage extends Component {
        constructor(props) {
            super(props);

            this.state = {
                status: "hideMsg",
                msg: "",
                style: "info"
            };
        }

        componentWillReceiveProps(nextProps) {
            if(nextProps.msg !== undefined) {
                this.setState({
                    status: "hideMsg showMsg",
                    msg: nextProps.msg,
                    style: nextProps.style
                });

                setTimeout(() => {
                    this.setState({
                        status: "hideMsg",
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