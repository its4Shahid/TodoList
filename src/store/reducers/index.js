import { combineReducers } from 'redux';
import { TodoListItems } from './TodoListItem.reducer';

const rootReducer = combineReducers({
    TodoListItems,
});
export default rootReducer;
