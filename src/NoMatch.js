import React from 'react';
import { Container, Button } from '@material-ui/core';

export const NoMatch = () => (
    <div className="App">
        <Container className="text-center align-middle" style={{ color: "White" }}>
            <h1>Oops!</h1>
            <p>Something went wrong.</p>
            <Button
                variant="contained"
                color="primary"
                href="./"
                style={{ color: "White" }}
            >
                Home
            </Button>
        </Container>
    </div >
)