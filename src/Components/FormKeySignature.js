import React, { Component } from 'react'


import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

export class FormKeySignature extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;


        return (
            <MuiThemeProvider>
                <div className="form-container">
                    <h1 className="mb-5">Key Signatures</h1>

                    <FormGroup row>
                        {
                            values.Keys.map(item => (

                                <FormControl>
                                    <FormControlLabel
                                        control={<Checkbox checked={item.value} onChange={handleChange(item.id)} name={item.name} />}
                                        label={
                                            <React.Fragment>
                                                <img src={item.img} alt={item.label} style={{ height: 50 }} />
                                                {item.label}
                                            </React.Fragment>
                                        }
                                    />
                                </FormControl>

                            ))
                        }
                    </FormGroup>

                    <br />

                    <Button
                        onClick={this.back}
                    >
                        Back
                        </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.continue}
                    >
                        Next
                        </Button>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default FormKeySignature