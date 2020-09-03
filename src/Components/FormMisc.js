import React, { Component } from 'react';
import { Container, Button, FormControl, FormGroup, FormControlLabel, Checkbox, Grid, Slider, TextField } from '@material-ui/core';


export class FormTimeSignature extends Component {
    continue = e => {
        e.preventDefault();
        this.props.generate();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
            <Container maxWidth="md">
                <h1 className="mb-5">Miscellaneous Options</h1>
                <label>Number of Bars:</label>
                <Slider
                    defaultValue={values.numBars}
                    value={values.numBars}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    step={1}
                    min={2}
                    max={50}
                />


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
                    Generate
                    </Button>
            </Container>
        )
    }
}

export default FormTimeSignature