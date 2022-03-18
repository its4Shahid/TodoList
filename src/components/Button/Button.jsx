import React from 'react';
import Button from '@mui/material/Button';

function GenericButton(props) {
    // const { onClick, variant, color, size } = props;
    return (
        <Button
            onClick={props.onClick}
            variant={props.variant}
            color={props.color}
            size={props.size}
            style={{ marginLeft: '5px', marginBottom: '3px', height: '30px' }}
        >
            {props.title}
        </Button>
    );
}

export default GenericButton;
