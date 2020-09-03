import React from 'react';
import { Container, Paper } from '@material-ui/core';

export const About = () => (
    <div className="App">
        <Container maxWidth="md">
            <Paper style={{ padding: "25px", margin: "25px 0 25px 0" }}>
                <h1>About</h1>
                <p>SightRead is a simple React web app that generates and displays a short passage of music,
                using the MusicXML format, based on user inputs.</p>
                <p>Current features include:</p>
                <ul>
                    <li>Selecting Key Signatures</li>
                    <li>Selecting Time Signatures</li>
                    <li>Selecting Number of Bars</li>
                    <li>Generation of Musical Passage</li>
                </ul>
                <p>More to come...</p>
                <p>Checkout the project on Github: <a href="https://github.com/toodom02/sightread">SightRead</a></p>
                <h6 align="center">Copyright © 2020 - Dominic Too</h6>
            </Paper>
        </Container>
    </div >
)