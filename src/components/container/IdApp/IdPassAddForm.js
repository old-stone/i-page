import React, { useState } from "react";

import AddButton from "../../presentational/moleceules/AddButton";
import Button from "@material-ui/core/Button";
import FormDialog from "../../presentational/moleceules/FormDialog";
import TextField from "@material-ui/core/TextField";
import { addIdPass } from "../../../modules/idPassApp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { validateUrl } from "../../../utils/validator";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function IdPassAddForm(props) {
  const { classes } = props;
  const { addIdPass } = props;

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [account, setAccount] = useState("");
  const [hint, setHint] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onFormSubmit = e => {
    e.preventDefault();
    addIdPass(title, url, account, hint, description);
    setIsOpen(false);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTitle("");
    setUrl("");
    setAccount("");
    setHint("");
    setDescription("");
    setIsError(false);
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
      <AddButton xs={12} md={12} handleClickOpen={handleClickOpen} />
      <FormDialog
        title="アカウント情報を追加する"
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
          <Button key="cancelButton" onClick={handleClose} color="primary">
            キャンセル
          </Button>,
          <Button
            key="addButton"
            type="submit"
            color="primary"
            disabled={isError || !title}
          >
            追加
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
    addIdPass: bindActionCreators(addIdPass, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(IdPassAddForm));
