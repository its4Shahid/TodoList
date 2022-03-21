import { Grid, styled, Typography } from '@mui/material';
import React from 'react';

const StyledGrid = styled(Grid)(({ theme }) => ({
    background: 'pink',
    padding: 8
}))

function TodoHeader(props) {
    const { headerTitle } = props;
    return (
        <StyledGrid container justifyContent="center">
            <Grid item>
                <Typography component="h1" variant="h3" style={{ color: 'black ' }}>
                    {headerTitle}
                </Typography>
            </Grid>
        </StyledGrid>
    );
}
export default TodoHeader;
