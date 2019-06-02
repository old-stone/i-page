import React, { useState } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import TodoEditForm from "./TodoEditForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleTodo } from "../../../modules/todoApp";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function TodoItem(props) {
  const { id, title, description, limit, isChecked, isEditMode } = props;
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
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ListItem button onClick={handleToggle(id)}>
        <ListItemIcon>
          <Checkbox edge="start" checked={isChecked} disableRipple />
        </ListItemIcon>
        <ListItemText primary={title} secondary={description} />
        <ListItemSecondaryAction>
          <TodoEditForm
            id={id}
            title={title}
            description={description}
            limit={limit}
            isEditMode={isEditMode || isHovering}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </div>
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
