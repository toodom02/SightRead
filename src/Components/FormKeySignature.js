import React, { Component } from 'react';
import { Container, Button, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';


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
            <Container maxWidth="md">
                <h1 className="mb-5">Key Signatures</h1>

                <FormControl component="fieldset">
                    <FormGroup row>
                        {
                            values.Keys.map(item => (
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
                            ))
                        }
                    </FormGroup>
                </FormControl>

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
            </Container>
        )
    }
}

export default FormKeySignature