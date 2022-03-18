import React from 'react';
import TextField from '../../components/TextBox';
import Button from '../../components/Button';

function TodoInput(props) {
    const { InputVal, inputChangeHandler, buttonTitle, onClickHandler } = props;
    console.log(InputVal);
    return (
        <>
            <div>
                <TextField textValue={InputVal} onChange={inputChangeHandler} placeholder="Enter Item" />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    title={InputVal === '' ? 'ADD' : buttonTitle}
                    onClick={onClickHandler}
                    className="btnAdd"
                    style="marginLeft:'5px'"
                />
            </div>
        </>
    );
}
export default TodoInput;
