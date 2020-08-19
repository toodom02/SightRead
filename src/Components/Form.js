import React, { Component } from 'react';
import FormWelcome from './FormWelcome';
import FormKeySignature from './FormKeySignature';
import FormTimeSignature from './FormTimeSignature';
import FormConfirm from './FormConfirm';
import FormSuccess from './FormSuccess';
import GenerateXML from "./GenerateXML";

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
            { id: 0, label: "C Major", name: "C", img: CMAm, value: true, notes: ['A0', 'B0', 'C0', 'D0', 'E0', 'F0', 'G0'] },
            { id: 1, label: "G Major", name: "G", img: GMEm, value: true, notes: ['A0', 'B0', 'C0', 'D0', 'E0', 'F1', 'G0'] },
            { id: 2, label: "D Major", name: "D", img: DMBm, value: true, notes: ['A0', 'B0', 'C1', 'D0', 'E0', 'F1', 'G0'] },
            { id: 3, label: "A Major", name: "A", img: AMFSm, value: true, notes: ['A0', 'B0', 'C1', 'D0', 'E0', 'F1', 'G1'] },
            { id: 4, label: "E Major", name: "E", img: EMCSm, value: true, notes: ['A0', 'B0', 'C1', 'D1', 'E0', 'F1', 'G1'] },
            { id: 5, label: "B Major", name: "B", img: BMGSm, value: true, notes: ['A1', 'B0', 'C1', 'D1', 'E0', 'F1', 'G1'] },
            { id: 6, label: "F# Major", name: "F#", img: FSMDSm, value: true, notes: ['A1', 'B', 'C1', 'D1', 'E1', 'F1', 'G1'] },
            { id: 7, label: "C# Major", name: "C#", img: CSMASm, value: true, notes: ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1'] },
        ],
        Times: [
            { id: 0, label: "3/4", name: "threefour", img: threefour, value: true, num: 3, denom: 4, crotchetBeats: 3 },
            { id: 1, label: "4/4", name: "fourfour", img: fourfour, value: true, num: 4, denom: 4, crotchetBeats: 4 },
            { id: 2, label: "6/8", name: "sixeight", img: sixeight, value: true, num: 6, denom: 8, crotchetBeats: 3 },
            { id: 3, label: "7/8", name: "sevenseight", img: sevenseight, value: true, num: 7, denom: 8, crotchetBeats: 3.5 },
        ],
    };

    generate = () => {
        const { Keys, Times } = this.state;
        this.setState({ xml: GenerateXML(Keys, Times) });
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
        const { step, xml } = this.state;
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
                        xml={xml}
                    />
                );
            default:
                return 'Unknown stepIndex';
        }
    }
}

export default Form