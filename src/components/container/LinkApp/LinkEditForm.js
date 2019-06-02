import React, { useState } from "react";
import { deleteLink, editLink } from "../../../modules/linkApp";

import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import FormDialog from "../../presentational/moleceules/FormDialog";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function LinkEditForm(props) {
  const { groupId, itemId, isEditMode, classes } = props;
  const { editLink, deleteLink } = props;

  const [title, setTitle] = useState(props.title);
  const [url, setUrl] = useState(props.url);
  const [description, setDescription] = useState(props.description);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onFormSubmit = e => {
    e.preventDefault();
    editLink(groupId, itemId, title, url, description);
    setIsOpen(false);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTitle(props.title);
    setUrl(props.url);
    setDescription(props.description);
    setIsError(false);
  };

  const handleClickDelete = () => {
    deleteLink(groupId, itemId);
  };

  const changeTitle = e => {
    setTitle(e.target.value);
  };

  const changeUrl = e => {
    const url = e.target.value;
    setUrl(url);
    setIsError(
      Boolean(url) &&
        !/https?:\/\/(www\.)?(?:localhost|[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*))/g.test(
          url
        )
    );
  };

  const changeDescription = e => {
    setDescription(e.target.value);
  };

  return (
    <>
      <IconButton
        className={classes.button}
        aria-label="Edit"
        size="small"
        style={{
          visibility: isEditMode ? "visible" : "hidden"
        }}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <FormDialog
        title="リンクを編集する"
        isOpen={isOpen}
        onFormSubmit={onFormSubmit}
        handleClose={handleClose}
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
            key="url"
            id="outlined-url"
            error={isError}
            helperText={isError && "フォーマットエラー"}
            label="URL"
            className={classes.textField}
            value={url}
            variant="outlined"
            onChange={changeUrl}
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
            disabled={isError || !title || !url}
          >
            保存
          </Button>
        ]}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    editLink: bindActionCreators(editLink, dispatch),
    deleteLink: bindActionCreators(deleteLink, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LinkEditForm));
