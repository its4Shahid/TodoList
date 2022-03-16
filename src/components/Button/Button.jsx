import React from 'react';
import Button from '@mui/material/Button';

class GenericButton extends React.Component {
    render() {
        const { onClick, variant, color, size } = this.props;
        return (
            <Button
                onClick={onClick}
                variant={variant}
                color={color}
                size={size}
                style={{ marginLeft: '5px', marginBottom: '3px', height: '30px' }}
            >
                {this.props.title}
            </Button>
        );
    }
}

export default GenericButton;
