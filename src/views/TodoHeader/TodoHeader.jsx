import React from 'react';

function TodoHeader(props) {
    const { headerTitle } = props;
    return <h1 style={{ color: 'black ' }}>{headerTitle}</h1>;
}
export default TodoHeader;
