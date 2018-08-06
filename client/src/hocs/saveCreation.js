import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export const saveCreation = (InnerComponent) => {
    class SaveCreation extends Component {
        constructor(props) {
            super(props);

            this.state = {
                activeKey: "1"
            };
        }

        handleSubmit() {
            console.log(this.props);
        }

        render() {
            const { ...passThroughProps } = this.props;

            return (
                <div>
                    <InnerComponent {...passThroughProps}/>
                    <Button onClick={this.handleSubmit.bind(this)}>Enregistrer</Button>
                </div>
            )
        }
    }

    return SaveCreation;
};
