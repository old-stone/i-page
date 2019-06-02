import React, { useState } from "react";
import { deleteIdPass, editIdPass } from "../../../modules/idPassApp";

import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import FormDialog from "../../presentational/moleceules/FormDialog";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { validateUrl } from "../../../utils/validator";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function IdPassEditForm(props) {
  const { id, isEditMode, classes } = props;
  const { editIdPass, deleteIdPass } = props;

  const [title, setTitle] = useState(props.title);
  const [url, setUrl] = useState(props.url);
  const [account, setAccount] = useState(props.account);
  const [hint, setHint] = useState(props.hint);
  const [description, setDescription] = useState(props.description);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onFormSubmit = e => {
    e.preventDefault();
    editIdPass(id, title, url, account, hint, description);
    setIsOpen(false);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTitle(props.title);
    setUrl(props.url);
    setAccount(props.account);
    setHint(props.hint);
    setDescription(props.description);
    setIsError(false);
  };

  const handleClickDelete = () => {
    deleteIdPass(id);
  };

  const changeTitle = e => {
    setTitle(e.target.value);
  };

  const changeUrl = e => {
    const url = e.target.value;
    setUrl(url);
    setIsError(Boolean(url) && !validateUrl(url));
  };

  const changeAccount = e => {
    setAccount(e.target.value);
  };

  const changeHint = e => {
    setHint(e.target.value);
  };

  const changeDescription = e => {
    setDescription(e.target.value);
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
        title="アカウント情報を編集する"
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
            required
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
            key="account"
            id="outlined-account"
            label="ID"
            className={classes.textField}
            value={account}
            variant="outlined"
            onChange={changeAccount}
            margin="dense"
            fullWidth
          />,
          <TextField
            key="hint"
            id="outlined-hint"
            label="パスワードのヒント"
            className={classes.textField}
            value={hint}
            variant="outlined"
            onChange={changeHint}
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
            disabled={isError || !title}
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
    editIdPass: bindActionCreators(editIdPass, dispatch),
    deleteIdPass: bindActionCreators(deleteIdPass, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(IdPassEditForm));
