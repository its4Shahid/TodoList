import React from 'react';
import Button from '../../components/Button';

class TodoFooter extends React.Component {
    render() {
        return (
            <Button
                variant="contained"
                color="primary"
                size="small"
                title="Clear List"
                onClick={this.todoClearHandler}
            />
        );
    }
}
export default TodoFooter;
