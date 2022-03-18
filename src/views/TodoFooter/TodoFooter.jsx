import React from 'react';
import Button from '../../components/Button';

function TodoFooter(props) {
    const { todoClearHandler } = props;
    return <Button variant="contained" color="primary" size="small" title="Clear List" onClick={todoClearHandler} />;
}
export default TodoFooter;
