import React from 'react';
import { Form } from './Components/Form';
import { Container, Paper } from '@material-ui/core';

export const Home = () => (

    <div className="App">
        <Container maxWidth="md">
            <Paper style={{ textAlign: "center", padding: "25px 0 25px 0", margin: "25px 0 25px 0", justifyContent: "center" }}>
                <Form />
            </Paper>
        </Container>
    </div >
)