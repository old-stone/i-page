import React, { useState } from "react";
import { deleteTodo, editTodo } from "../../../modules/todoApp";

import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import FormDialog from "../../presentational/moleceules/FormDialog";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function TodoEditForm(props) {
  const { id, isEditMode, classes } = props;
  const { editTodo, deleteTodo } = props;

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [limit, setLimit] = useState(props.limit);
  const [isOpen, setIsOpen] = useState(false);

  const onFormSubmit = e => {
    e.preventDefault();
    editTodo(id, title, description, limit);
    setIsOpen(false);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTitle(props.title);
    setDescription(props.description);
    setLimit(props.limit);
  };

  const handleClickDelete = () => {
    deleteTodo(id);
  };

  const changeTitle = e => {
    setTitle(e.target.value);
  };

  const changeDescription = e => {
    setDescription(e.target.value);
  };

  const changeLimit = e => {
    setLimit(e.target.value);
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="Comments"
        onClick={handleClickOpen}
        style={{
          visibility: isEditMode ? "visible" : "hidden"
        }}
      >
        <EditIcon />
      </IconButton>
      <FormDialog
        title="TODOを編集する"
        fields={[
          <TextField
            key="title"
            autoFocus
            id="outlined-title"
            label="タイトル"
            className={classes.textField}
            value={title}
            variant="outlined"
            onChange={changeTitle}
            margin="dense"
            fullWidth
          />,
          <TextField
            key="description"
            id="outlined-description"
            label="詳細"
            className={classes.textField}
            value={description}
            variant="outlined"
            onChange={changeDescription}
            margin="dense"
            fullWidth
          />,
          <TextField
            key="limit"
            type="date"
            id="outlined-limit"
            label="期限"
            className={classes.textField}
            value={limit}
            variant="outlined"
            onChange={changeLimit}
            margin="dense"
            fullWidth
          />
        ]}
        buttons={[
          <Button
            key="deleteButton"
            onClick={handleClickDelete}
            color="secondary"
          >
            削除
          </Button>,
          <Button key="cancelButton" onClick={handleClose} color="primary">
            キャンセル
          </Button>,
          <Button
            key="saveButton"
            type="submit"
            color="primary"
            disabled={!title}
          >
            保存
          </Button>
        ]}
        isOpen={isOpen}
        onFormSubmit={onFormSubmit}
        handleClose={handleClose}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    editTodo: bindActionCreators(editTodo, dispatch),
    deleteTodo: bindActionCreators(deleteTodo, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TodoEditForm));
