import React, { Component } from 'react';
import { Container, Button, FormControl, FormGroup, FormControlLabel, Checkbox, Grid } from '@material-ui/core';


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

        const majorKeys = values.Keys.filter(key => key.mode === "major");
        const minorKeys = values.Keys.filter(key => key.mode === "minor");

        return (
            <Container maxWidth="md">
                <h1 className="mb-5">Key Signatures</h1>
                <Grid container style={{ textAlign: "left" }}>
                    <FormControl component="fieldset">
                        <label>Major Keys:</label>
                        <FormGroup row>
                            {
                                majorKeys.map(item => (
                                    <Grid item key={item.id} xs={6} sm={3}>
                                        <FormControl key={item.id} >
                                            <FormControlLabel
                                                control={<Checkbox checked={item.value} onChange={handleChange(item.id)} name={item.name} />}
                                                label={
                                                    <React.Fragment>
                                                        <img src={item.img} alt={item.label} style={{ height: 50 }} />
                                                        {" " + item.label}
                                                    </React.Fragment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                ))
                            }
                        </FormGroup>
                        <label>Minor Keys:</label>
                        <FormGroup row>
                            {
                                minorKeys.map(item => (
                                    <Grid item key={item.id} xs={6} sm={3}>
                                        <FormControl key={item.id} >
                                            <FormControlLabel
                                                control={<Checkbox checked={item.value} onChange={handleChange(item.id)} name={item.name} />}
                                                label={
                                                    <React.Fragment>
                                                        <img src={item.img} alt={item.label} style={{ height: 50 }} />
                                                        {" " + item.label}
                                                    </React.Fragment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                ))
                            }
                        </FormGroup>
                    </FormControl>
                </Grid>

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
            </Container >
        )
    }
}

export default FormKeySignature