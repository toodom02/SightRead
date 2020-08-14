import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

export class FormWelcome extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {

        return (
            <ThemeProvider>
                <div className="form-container">
                    <h1>Welcome</h1>
                    <p>Hi,<br />
                    Click Next to Start Generating music!<br />
                    </p>


                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.continue}
                    >Next
                    </Button>
                </div>
            </ThemeProvider>
        )
    }
}

export default FormWelcome