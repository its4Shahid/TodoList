import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const StyledButton = styled(Button)(() => ({
    height: 30
}))
function GenericButton({title, ...props}) {
    // const { onClick, variant, color, size } = props;
    return (
        <StyledButton
           {...props}
        >
            {title}
        </StyledButton>
    );
}

export default GenericButton;
