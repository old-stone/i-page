import React, { useState } from "react";
import { deleteLinkGroup, editLinkGroup } from "../../../modules/linkApp";

import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import FormDialog from "../../presentational/moleceules/FormDialog";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function GroupEditForm(props) {
  const { groupId, isEditMode, classes } = props;
  const { editLinkGroup } = props;

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [isOpen, setIsOpen] = useState(false);

  const onFormSubmit = e => {
    e.preventDefault();
    editLinkGroup(groupId, title, description);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTitle(props.title);
    setDescription(props.description);
  };

  const handleClickDelete = () => {
    deleteLinkGroup(groupId);
  };

  const changeTitle = e => {
    setTitle(e.target.value);
  };

  const changeDescription = e => {
    setDescription(e.target.value);
  };

  return (
    <>
      <IconButton
        className={classes.button}
        aria-label="Edit"
        style={{
          visibility: isEditMode ? "visible" : "hidden"
        }}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <FormDialog
        title="グループを編集する"
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
            disabled={!title}
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
    editLinkGroup: bindActionCreators(editLinkGroup, dispatch),
    deleteLinkGroup: bindActionCreators(deleteLinkGroup, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(GroupEditForm));
