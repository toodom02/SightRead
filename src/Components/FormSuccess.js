import React, { Component } from 'react';
import { Container, Button } from '@material-ui/core';
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
                <Button href={this.state.downloadUrl} title="Download musicXML File" download="generated_passage.musicxml" color="primary">
                    Download <GetAppIcon />
                </Button>
            </Container>
        )
    }
}

export default FormSuccess