import React from 'react';

class TodoHeader extends React.Component {
    render() {
        const { headerTitle } = this.props;
        return <h1 style={{ color: 'black ' }}>{headerTitle}</h1>;
    }
}
export default TodoHeader;
