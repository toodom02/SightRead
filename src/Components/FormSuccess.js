import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import OpenSheetMusicDisplay from '../lib/OpenSheetMusicDisplay';

export class FormSuccess extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        const { xml } = this.props;
        this.state = { file: xml };
    }

    render() {

        return (
            <Container maxWidth="xl">
                <OpenSheetMusicDisplay file={this.state.file} />
            </Container>
        )
    }
}

export default FormSuccess