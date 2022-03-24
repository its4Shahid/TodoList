import React from 'react';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

const GenericList = (props) => {
    const { items, deleteTask, updateTask } = props;
    return (
        <List>
            {items.map((item, index) => (
                <ListItem key={item.id}>
                    {item.title}
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => deleteTask(item.id)} edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={() => updateTask(item.id)} edge="end" aria-label="edit">
                            <ModeEditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default GenericList;
