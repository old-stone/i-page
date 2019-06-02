import AppBar from "@material-ui/core/AppBar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
});

function Header(props) {
  const { isEditMode, classes } = props;
  const { handleSwitch } = props;

  return (
    <AppBar position="static" color="default" className={classes.root}>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <DashboardIcon />
        </IconButton>
        <Typography variant="h5" color="inherit" className={classes.title}>
          iPage
        </Typography>
        <FormControlLabel
          value="Edit"
          control={<Switch checked={isEditMode} onChange={handleSwitch} />}
          label="Edit"
          labelPlacement="start"
        />
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
