import React from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



class GenericButton extends React.Component {
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        variant={this.props.variant}
        color={this.props.color}
        size={this.props.size}
      >
        {this.props.title}
      </Button>
    );
  }
}

export default GenericButton;
