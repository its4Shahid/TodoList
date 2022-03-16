import React from 'react';
import TextField from '@mui/material/TextField';

class GenericTextBox extends React.Component {
    render() {
        const { textValue, onChange, placeholder } = this.props;
        return (
            <TextField
                variant="standard"
                id="standard-basic"
                value={textValue}
                onChange={onChange}
                placeholder={placeholder}
                style={{ marginLeft: '5px', width: '80%', height: '50%' }}
            />
        );
    }
}

export default GenericTextBox;
