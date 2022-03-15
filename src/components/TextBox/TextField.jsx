import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { CallMissedSharp } from '@material-ui/icons';

const styles = () => ({
    textField: {
        border: 1,
        borderRadius: 2,
        color: 'white',
        height: 48,
        height: 100,
        padding: '0 30px',
    },
});

class GenericTextBox extends React.Component {
    render() {
        const { val, onChange } = this.props;
        return (
            <TextField
                id="standard-required"
                value={val}
                onChange={onChange}
                style={{ marginLeft: '5px', width: '80%' }}
            />
        );
    }
}

export default GenericTextBox;
