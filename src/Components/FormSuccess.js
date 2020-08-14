import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import OpenSheetMusicDisplay from '../lib/OpenSheetMusicDisplay';

export class FormSuccess extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        const { midiFile, xml } = this.props;
        this.state = { file: xml };
    }

    render() {

        const { midiFile, xml } = this.props;

        return (
            <ThemeProvider>
                <div className="form-container">
                    <OpenSheetMusicDisplay file={this.state.file} />
                </div>
            </ThemeProvider >
        )
    }
}

export default FormSuccess