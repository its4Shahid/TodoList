import React from "react";
import TextField from "@material-ui/core/TextField";

class GenericTextBox extends React.Component {
  render() {
    return (
      <TextField id="standard-basic" onChange={this.props.onChange}/>
          );
  }
}

export default GenericTextBox;