import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export const updateMessage = (InnerComponent) => {
    class UpdateMessage extends Component {
        constructor(props) {
            super(props);

            this.state = {
                status: false,
                msg: "",
                style: "success"
            };
        }

        componentWillReceiveProps(nextProps) {
            let nextStatus = nextProps.status;
            if (nextStatus === 200) {
                this.setState({
                    status: !this.state.status,
                    msg: "Your Profile has been successfully updated",
                    style: "success"
                });
            } else if(typeof nextStatus === "number" || nextStatus === undefined) {
                this.setState({
                    status: !this.state.status,
                    msg: "Oups something went wrong ! Maybe try again",
                    style: "danger"
                });

            }

            setTimeout(() => {
                this.setState({
                    status: false,
                    msg: "",
                    style: "success"
                })
            }, 3000)
        }

        render() {
            const { ...passThroughProps } = this.props;

            return (
                <div>
                    <InnerComponent {...passThroughProps}/>
                    <Alert className={this.state.status ? "showMsg" : "hideMsg"} bsStyle={this.state.style}>
                        {this.state.msg}
                    </Alert>
                </div>
            )
        }
    }

    return UpdateMessage;
};