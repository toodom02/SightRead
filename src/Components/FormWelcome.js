import React, { Component } from 'react';
import { Container, Button } from '@material-ui/core';


export class FormWelcome extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        return (
            <Container maxWidth="md">
                <h1>Welcome</h1>
                <p>
                    Click Next to Start Generating Music!
                </p>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.continue}
                >Next
                    </Button>
            </Container>
        )
    }
}

export default FormWelcome