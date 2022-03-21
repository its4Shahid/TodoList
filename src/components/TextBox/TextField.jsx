import React from 'react';
import TextField from '@mui/material/TextField';

function GenericTextBox(props) {
    const { textValue, onChange, placeholder } = props;
    return (
        <TextField
            fullWidth
            variant="standard"
            id="standard-basic"
            value={textValue}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default GenericTextBox;
