import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function AddButton(props) {
  const { xs, md, handleClickOpen, classes } = props;

  return (
    <Grid item xs={xs} md={md}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
        fullWidth
      >
        <AddIcon fontSize="small" />
      </Button>
    </Grid>
  );
}

export default withStyles(styles)(AddButton);
