import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

export class FormWelcome extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {

        return (
            <MuiThemeProvider>
                <div className="form-container">
                    <h1 className="mb-5">Welcome</h1>
                    <p>Hi,<br />
                    Click Next to Start Geenrating music!<br />
                    </p>


                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.continue}
                    >Next
                    </Button>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default FormWelcome