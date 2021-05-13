import React, { Component } from 'react';
import FormWelcome from './FormWelcome';
import FormKeySignature from './FormKeySignature';
import FormTimeSignature from './FormTimeSignature';
import FormMisc from './FormMisc';
import FormSuccess from './FormSuccess';
import GenerateXML from "./GenerateXML";

// sharp keys
import CMam from "../Assets/Keys/Ca.svg";
import AMfsm from "../Assets/Keys/Afs.svg";
import BMgsm from "../Assets/Keys/Bgs.svg";
import CSMasm from "../Assets/Keys/CSas.svg";
import DMbm from "../Assets/Keys/Db.svg";
import EMcsm from "../Assets/Keys/Ecs.svg";
import FSMdsm from "../Assets/Keys/FSds.svg";
import GMem from "../Assets/Keys/Ge.svg";

// flat keys
import AFMfm from "../Assets/Keys/AFf.svg";
import BMafm from "../Assets/Keys/Baf.svg";
import BFMgm from "../Assets/Keys/BFg.svg";
import DFMbfm from "../Assets/Keys/DFbf.svg";
import EFMcm from "../Assets/Keys/EFc.svg";
import FMdm from "../Assets/Keys/Fd.svg";
import GFMefm from "../Assets/Keys/GFef.svg";

// time sigs
import threefour from "../Assets/Times/34.svg";
import fourfour from "../Assets/Times/44.svg";
import sixeight from "../Assets/Times/68.svg";
import sevenseight from "../Assets/Times/78.svg";

export class Form extends Component {
    state = {
        numBars: 12,
        step: 1,
        Keys: [ //Uses no-break spaces for label
            { id: 0, fifths: +0, label: "C Major", name: "C+0", img: CMam, value: true, mode: "major", notes: ['A+0', 'B+0', 'C+0', 'D+0', 'E+0', 'F+0', 'G+0'] },
            { id: 1, fifths: +1, label: "G Major", name: "G+0", img: GMem, value: true, mode: "major", notes: ['A+0', 'B+0', 'C+0', 'D+0', 'E+0', 'F+1', 'G+0'] },
            { id: 2, fifths: +2, label: "D Major", name: "D+0", img: DMbm, value: true, mode: "major", notes: ['A+0', 'B+0', 'C+1', 'D+0', 'E+0', 'F+1', 'G+0'] },
            { id: 3, fifths: +3, label: "A Major", name: "A+0", img: AMfsm, value: true, mode: "major", notes: ['A+0', 'B+0', 'C+1', 'D+0', 'E+0', 'F+1', 'G+1'] },
            { id: 4, fifths: +4, label: "E Major", name: "E+0", img: EMcsm, value: true, mode: "major", notes: ['A+0', 'B+0', 'C+1', 'D+1', 'E+0', 'F+1', 'G+1'] },
            { id: 5, fifths: +5, label: "B Major", name: "B+0", img: BMgsm, value: true, mode: "major", notes: ['A+1', 'B+0', 'C+1', 'D+1', 'E+0', 'F+1', 'G+1'] },
            { id: 6, fifths: +6, label: "F# Major", name: "F+1", img: FSMdsm, value: true, mode: "major", notes: ['A+1', 'B+0', 'C+1', 'D+1', 'E+1', 'F+1', 'G+1'] },
            { id: 7, fifths: +7, label: "C# Major", name: "C+1", img: CSMasm, value: true, mode: "major", notes: ['A+1', 'B+1', 'C+1', 'D+1', 'E+1', 'F+1', 'G+1'] },

            { id: 8, fifths: -1, label: "F Major", name: "F+0", img: FMdm, value: true, mode: "major", notes: ['A+0', 'B-1', 'C+0', 'D+0', 'E+0', 'F+0', 'G+0'] },
            { id: 9, fifths: -2, label: "Bb Major", name: "B-1", img: BFMgm, value: true, mode: "major", notes: ['A+0', 'B-1', 'C+0', 'D+0', 'E-1', 'F+0', 'G+0'] },
            { id: 10, fifths: -3, label: "Eb Major", name: "E-1", img: EFMcm, value: true, mode: "major", notes: ['A-1', 'B-1', 'C+0', 'D+0', 'E-1', 'F+0', 'G+0'] },
            { id: 11, fifths: -4, label: "Ab Major", name: "A-1", img: AFMfm, value: true, mode: "major", notes: ['A-1', 'B-1', 'C+0', 'D-1', 'E-1', 'F+0', 'G+0'] },
            { id: 12, fifths: -5, label: "Db Major", name: "D-1", img: DFMbfm, value: true, mode: "major", notes: ['A-1', 'B-1', 'C+0', 'D-1', 'E-1', 'F+0', 'G-1'] },
            { id: 13, fifths: -6, label: "Gb Major", name: "G-1", img: GFMefm, value: true, mode: "major", notes: ['A-1', 'B-1', 'C-1', 'D-1', 'E-1', 'F+0', 'G-1'] },

            { id: 14, fifths: +0, label: "A Minor", name: "A+0", img: CMam, value: true, mode: "minor", notes: ['A+0', 'B+0', 'C+0', 'D+0', 'E+0', 'F+0', 'G+1'] },
            { id: 15, fifths: +1, label: "E Minor", name: "E+0", img: GMem, value: true, mode: "minor", notes: ['A+0', 'B+0', 'C+0', 'D+1', 'E+0', 'F+1', 'G+0'] },
            { id: 16, fifths: +2, label: "B Minor", name: "B+0", img: DMbm, value: true, mode: "minor", notes: ['A+1', 'B+0', 'C+1', 'D+0', 'E+0', 'F+1', 'G+0'] },
            { id: 17, fifths: +3, label: "F# Minor", name: "F+1", img: AMfsm, value: true, mode: "minor", notes: ['A+0', 'B+0', 'C+1', 'D+0', 'E+1', 'F+1', 'G+1'] },
            { id: 18, fifths: +4, label: "C# Minor", name: "C+1", img: EMcsm, value: true, mode: "minor", notes: ['A+0', 'B+1', 'C+1', 'D+1', 'E+0', 'F+1', 'G+1'] },
            { id: 19, fifths: +5, label: "G# Minor", name: "G+1", img: BMgsm, value: true, mode: "minor", notes: ['A+1', 'B+0', 'C+1', 'D+1', 'E+0', 'F+2', 'G+1'] },
            { id: 20, fifths: +6, label: "D# Minor", name: "D+1", img: FSMdsm, value: true, mode: "minor", notes: ['A+1', 'B+0', 'C+2', 'D+1', 'E+1', 'F+1', 'G+1'] },
            { id: 21, fifths: +7, label: "A# Minor", name: "A+1", img: CSMasm, value: true, mode: "minor", notes: ['A+1', 'B+1', 'C+1', 'D+1', 'E+1', 'F+1', 'G+2'] },

            { id: 22, fifths: -1, label: "D Minor", name: "D+0", img: FMdm, value: true, mode: "minor", notes: ['A+0', 'B-1', 'C+1', 'D+0', 'E+0', 'F+0', 'G+0'] },
            { id: 23, fifths: -2, label: "G Minor", name: "G+0", img: BFMgm, value: true, mode: "minor", notes: ['A+0', 'B-1', 'C+0', 'D+0', 'E-1', 'F+1', 'G+0'] },
            { id: 24, fifths: -3, label: "C Minor", name: "C+0", img: EFMcm, value: true, mode: "minor", notes: ['A-1', 'B+0', 'C+0', 'D+0', 'E-1', 'F+0', 'G+0'] },
            { id: 25, fifths: -4, label: "F Minor", name: "F+0", img: AFMfm, value: true, mode: "minor", notes: ['A-1', 'B-1', 'C+0', 'D-1', 'E+0', 'F+0', 'G+0'] },
            { id: 26, fifths: -5, label: "Bb Minor", name: "B-1", img: DFMbfm, value: true, mode: "minor", notes: ['A+0', 'B-1', 'C+0', 'D-1', 'E-1', 'F+0', 'G-1'] },
            { id: 27, fifths: -6, label: "Eb Minor", name: "E-1", img: GFMefm, value: true, mode: "minor", notes: ['A-1', 'B-1', 'C-1', 'D+0', 'E-1', 'F+0', 'G-1'] },
            { id: 28, fifths: -7, label: "Ab Minor", name: "A-1", img: BMafm, value: true, mode: "minor", notes: ['A-1', 'B-1', 'C-1', 'D-1', 'E-1', 'F-1', 'G+0'] },
        ],
        Times: [
            { id: 0, label: "3/4", name: "threefour", img: threefour, value: true, num: 3, denom: 4, crotchetBeats: 3 },
            { id: 1, label: "4/4", name: "fourfour", img: fourfour, value: true, num: 4, denom: 4, crotchetBeats: 4 },
            { id: 2, label: "6/8", name: "sixeight", img: sixeight, value: true, num: 6, denom: 8, crotchetBeats: 3 },
            { id: 3, label: "7/8", name: "sevenseight", img: sevenseight, value: true, num: 7, denom: 8, crotchetBeats: 3.5 },
        ],
    };

    generate = () => {
        const { Keys, Times, numBars } = this.state;
        this.setState({ xml: GenerateXML(Keys, Times, numBars) });
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

    handleSliderChange = (event, newValue) => {
        this.setState({ 'numBars': newValue });
    };

    render() {
        const { step, xml, numBars, Keys, Times } = this.state;
        const values = { Keys, Times, numBars };

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
                    <FormMisc
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleSliderChange}
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