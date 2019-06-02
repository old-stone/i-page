import React, { useState } from "react";

import AddButton from "../../presentational/moleceules/AddButton";
import Button from "@material-ui/core/Button";
import FormDialog from "../../presentational/moleceules/FormDialog";
import TextField from "@material-ui/core/TextField";
import { addLink } from "../../../modules/linkApp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function LinkAddForm(props) {
  const { groupId, classes } = props;
  const { addLink } = props;

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onFormSubmit = e => {
    e.preventDefault();
    addLink(groupId, title, url, description);
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
      <AddButton xs={12} md={3} handleClickOpen={handleClickOpen} />
      <FormDialog
        title="リンクを追加する"
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
          <Button key="cancelButton" onClick={handleClose} color="primary">
            キャンセル
          </Button>,
          <Button
            key="addButton"
            type="submit"
            color="primary"
            disabled={isError || !title || !url}
          >
            追加
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
    addLink: bindActionCreators(addLink, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LinkAddForm));
