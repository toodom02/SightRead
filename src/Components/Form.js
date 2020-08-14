import React, { Component } from 'react';
import FormWelcome from './FormWelcome';
import FormKeySignature from './FormKeySignature';
import FormTimeSignature from './FormTimeSignature';
import FormConfirm from './FormConfirm';
import FormSuccess from './FormSuccess';
import GenerateMidi from "./GenerateMidi";

import CMAm from "../Assets/Keys/Ca.svg"
import AMFSm from "../Assets/Keys/Afs.svg"
import BMGSm from "../Assets/Keys/Bgs.svg"
import CSMASm from "../Assets/Keys/CSas.svg"
import DMBm from "../Assets/Keys/Db.svg"
import EMCSm from "../Assets/Keys/Ecs.svg"
import FSMDSm from "../Assets/Keys/FSds.svg"
import GMEm from "../Assets/Keys/Ge.svg"

import threefour from "../Assets/Times/34.svg"
import fourfour from "../Assets/Times/44.svg"
import sixeight from "../Assets/Times/68.svg"
import sevenseight from "../Assets/Times/78.svg"

export class Form extends Component {
    state = {
        step: 1,
        Keys: [
            { id: 0, label: "C Major", name: "C", img: CMAm, value: true, notes: ['G3', 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5'] },
            { id: 1, label: "G Major", name: "G", img: GMEm, value: true, notes: ['G3', 'A4', 'B4', 'C4', 'D4', 'E4', 'F#4', 'G4', 'A5', 'B5', 'C5', 'D5', 'E5', 'F#5', 'G5'] },
            { id: 2, label: "D Major", name: "D", img: DMBm, value: true, notes: ['G3', 'A4', 'B4', 'C#4', 'D4', 'E4', 'F#4', 'G4', 'A5', 'B5', 'C#5', 'D5', 'E5', 'F#5', 'G5'] },
            { id: 3, label: "A Major", name: "A", img: AMFSm, value: true, notes: ['G#3', 'A4', 'B4', 'C#4', 'D4', 'E4', 'F#4', 'G#4', 'A5', 'B5', 'C#5', 'D5', 'E5', 'F#5', 'G#5'] },
            { id: 4, label: "E Major", name: "E", img: EMCSm, value: true, notes: ['G#3', 'A4', 'B4', 'C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A5', 'B5', 'C#5', 'D#5', 'E5', 'F#5', 'G#5'] },
            { id: 5, label: "B Major", name: "B", img: BMGSm, value: true, notes: ['G#3', 'A#4', 'B4', 'C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A#5', 'B5', 'C#5', 'D#5', 'E5', 'F#5', 'G#5'] },
            { id: 6, label: "F# Major", name: "F#", img: FSMDSm, value: true, notes: ['G#3', 'A#4', 'B4', 'C#4', 'D#4', 'E#4', 'F#4', 'G#4', 'A#5', 'B5', 'C#5', 'D#5', 'E#5', 'F#5', 'G#5'] },
            { id: 7, label: "C# Major", name: "C#", img: CSMASm, value: true, notes: ['G#3', 'A#4', 'B#4', 'C#4', 'D#4', 'E#4', 'F#4', 'G#4', 'A#5', 'B#5', 'C#5', 'D#5', 'E#5', 'F#5', 'G#5'] },
        ],
        Times: [
            { id: 0, label: "3/4", name: "threefour", img: threefour, value: true, num: 3, denom: 4 },
            { id: 1, label: "4/4", name: "fourfour", img: fourfour, value: true, num: 4, denom: 4 },
            { id: 2, label: "6/8", name: "sixeight", img: sixeight, value: true, num: 6, denom: 8 },
            { id: 3, label: "7/8", name: "sevenseight", img: sevenseight, value: true, num: 7, denom: 8 },
        ],
        midiFile: ""
    };

    generate = () => {
        const { Keys, Times } = this.state;
        this.setState({ midiFile: GenerateMidi(Keys, Times) });
        this.setState({ xml: GenerateMidi(Keys, Times) });
    }


    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    handleKeyChange = input => e => {
        this.state.Keys[input].value = e.target.checked
        this.forceUpdate()
    };

    handleTimeChange = input => e => {
        this.state.Times[input].value = e.target.checked
        this.forceUpdate()
    };

    render() {
        const { step, midiFile, xml } = this.state;
        const { Keys, Times } = this.state;
        const values = { Keys, Times };

        switch (step) {
            case 1:
                return (
                    <FormWelcome
                        nextStep={this.nextStep}
                    />
                );
            case 2:
                return (
                    <FormKeySignature
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleKeyChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <FormTimeSignature
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleTimeChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <FormConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        generate={this.generate}
                        values={values}
                    />
                );
            case 5:
                return (
                    <FormSuccess
                        midiFile={midiFile}
                        xml={xml}
                    />
                );
            default:
                return 'Unknown stepIndex';
        }
    }
}

export default Form