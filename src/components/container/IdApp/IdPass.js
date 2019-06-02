import React, { useState } from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleTodo } from "../../../modules/todoApp";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function TodoItem(props) {
  const { id, title, url, account, hint, description, isEditMode } = props;
  const { toggleTodo } = props;

  const [isHovering, setIsHovering] = useState(false);

  const handleToggle = id => () => {
    toggleTodo(id);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <TableRow onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell>{account}</TableCell>
      <TableCell>{isHovering ? hint : "**********"}</TableCell>
      <TableCell>{description}</TableCell>
    </TableRow>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: bindActionCreators(toggleTodo, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TodoItem));
