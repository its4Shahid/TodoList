import React from 'react';
import TodoList from './views/TodoList';
import { Provider } from 'react-redux';
import store from './store/createStore';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
    }
}

export default App;
