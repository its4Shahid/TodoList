import React from 'react';
import TextField from '../../components/TextBox';
import Button from '../../components/Button';
import { Grid } from '@mui/material';

function TodoInput(props) {
    const { InputVal, inputChangeHandler, buttonTitle, onClickHandler } = props;
    console.log(InputVal);
    return (
        <Grid container rowSpacing={1}>
            <Grid item xs={12}>
                <TextField textValue={InputVal} onChange={inputChangeHandler} placeholder="Enter Item" />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    title={InputVal === '' ? 'ADD' : buttonTitle}
                    onClick={onClickHandler}
                    className="btnAdd"
                />
            </Grid>
        </Grid>
    );
}
export default TodoInput;
