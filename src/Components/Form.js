import React, { Component } from 'react';
import FormWelcome from './FormWelcome';
import FormKeySignature from './FormKeySignature';
import FormTimeSignature from './FormTimeSignature';
import FormConfirm from './FormConfirm';
import FormSuccess from './FormSuccess';

import CMAm from "../Assets/Keys/CM-Am.svg"
import AMFSm from "../Assets/Keys/AM-FSm.svg"
import BMGSm from "../Assets/Keys/BM-GSm.svg"
import CSMASm from "../Assets/Keys/CSM-ASm.svg"
import DMBm from "../Assets/Keys/DM-Bm.svg"
import EMCSm from "../Assets/Keys/EM-CSm.svg"
import FSMDSm from "../Assets/Keys/FSM-DSm.svg"
import GMEm from "../Assets/Keys/GM-Em.svg"

import threefour from "../Assets/Times/34.svg"
import fourfour from "../Assets/Times/44.svg"
import sixeight from "../Assets/Times/68.svg"
import sevenseight from "../Assets/Times/78.svg"

export class Form extends Component {
    state = {
        step: 1,
        Keys: [
            { id: 0, label: "C Major", name: "CMaj", img: CMAm, value: true },
            { id: 1, label: "G Major", name: "GMaj", img: GMEm, value: true },
            { id: 2, label: "D Major", name: "DMaj", img: DMBm, value: true },
            { id: 3, label: "A Major", name: "AMaj", img: AMFSm, value: true },
            { id: 4, label: "E Major", name: "EMaj", img: EMCSm, value: true },
            { id: 5, label: "B Major", name: "BMaj", img: BMGSm, value: true },
            { id: 6, label: "F# Major", name: "FSMaj", img: FSMDSm, value: true },
            { id: 7, label: "C# Major", name: "CSMaj", img: CSMASm, value: true },
        ],
        Times: [
            { id: 0, label: "3/4", name: "threefour", img: threefour, value: true },
            { id: 1, label: "4/4", name: "fourfour", img: fourfour, value: true },
            { id: 2, label: "6/8", name: "sixeight", img: sixeight, value: true },
            { id: 3, label: "7/8", name: "sevenseight", img: sevenseight, value: true },
        ],
    };


    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    handleKeyChange = input => e => {
        console.log(e.target.checked)
        this.state.Keys[input].value = e.target.checked
        this.forceUpdate()
    };

    handleTimeChange = input => e => {
        console.log(e.target.checked)
        this.state.Times[input].value = e.target.checked
        this.forceUpdate()
    };

    render() {
        const { step } = this.state;
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
                        values={values}
                    />
                );
            case 5:
                return (
                    <FormSuccess />
                );
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}

export default Form