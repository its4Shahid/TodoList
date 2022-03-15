import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { ImportExportTwoTone } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

class GenericList extends React.Component {
    co;
    render() {
        const { key, items, deleteTask, updateTask } = this.props;
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
                                    <EditIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
            </List>
        );
    }
}

export default GenericList;
