import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function FormDialog(props) {
  const { title, isOpen, handleClose, fields, buttons, classes } = props;
  const { onFormSubmit } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <form
        className={classes.container}
        onSubmit={onFormSubmit}
        noValidate
        autoComplete="off"
      >
        <DialogContent>{fields}</DialogContent>
        <DialogActions>{buttons}</DialogActions>
      </form>
    </Dialog>
  );
}

export default withStyles(styles)(FormDialog);
