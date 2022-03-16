import React from 'react';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

class GenericList extends React.Component {
    render() {
        const { items, deleteTask, updateTask } = this.props;
        return (
            <List>
                {items &&
                    items.length &&
                    items.map((item, index) => (
                        <ListItem key={item.id} value={item.name}>
                            {item.title}
                            <ListItemSecondaryAction>
                                <IconButton onClick={deleteTask.bind(this, item.id)} edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton onClick={updateTask.bind(this, item.id)} edge="end" aria-label="edit">
                                    <ModeEditIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
            </List>
        );
    }
}

export default GenericList;
