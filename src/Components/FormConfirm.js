import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class FormConfirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.generate();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };



    render() {
        const {
            values: { Keys, Times }
        } = this.props;

        this.keys = Keys.map((item) => {
            if (item.value === true) {
                return <li key={item.id}><img src={item.img} alt={item.label} style={{ height: 50 }} /> {item.label}</li>
            } else {
                return null
            }
        }
        );

        this.times = Times.map((item) => {
            if (item.value === true) {
                return <li key={item.id}><img src={item.img} alt={item.label} style={{ height: 50 }} /> {item.label}</li>
            } else {
                return null
            }
        }
        );

        return (
            <div className="form-container">
                <h1 className="mb-5">Confirm</h1>
                <List>
                    <ListItem button>
                        <ListItemText
                            primary="Key Signatures"
                            secondary={this.keys}
                        />
                    </ListItem>

                    <ListItem button>
                        <ListItemText
                            primary="Time Signatures"
                            secondary={this.times}
                        />
                    </ListItem>
                </List>

                <br />

                <Button
                    onClick={this.back}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.continue}
                >
                    Generate
                </Button>
            </div>
        )
    }
}

export default FormConfirm