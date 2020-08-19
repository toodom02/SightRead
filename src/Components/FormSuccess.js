import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import OpenSheetMusicDisplay from '../lib/OpenSheetMusicDisplay';

export class FormSuccess extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        const { xml } = this.props;

        const blob = new Blob([xml], { type: 'text/plain' });
        const downloadUrl = URL.createObjectURL(blob);

        this.state = {
            downloadUrl: downloadUrl,
            file: xml
        };
    }



    render() {

        return (
            <Container maxWidth="xl">
                <OpenSheetMusicDisplay file={this.state.file} />
                <a href={this.state.downloadUrl} title="Download musicXML File" download="generated_passage.musicxml"> Download <GetAppIcon /></a>
            </Container>
        )
    }
}

export default FormSuccess