import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import { addTodo } from "../../../modules/todoApp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  oneLineButton: {
    float: "right",
    marginLeft: theme.spacing(1)
  }
});

function TodoAddForm(props) {
  const { classes } = props;
  const { addTodo } = props;

  const today = moment().format("YYYY-MM-DD");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [limit, setLimit] = useState(today);
  const [isExpand, setIsExpand] = useState(false);

  const onFormSubmit = e => {
    e.preventDefault();
    addTodo(title, description, null);
    setTitle("");
    setDescription("");
    setLimit(today);
    setIsExpand(false);
  };
  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };
  const handleChangeLimit = e => {
    setLimit(e.target.value);
  };
  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <form onSubmit={onFormSubmit} noValidate autoComplete="off">
      <div className={classes.root}>
        <TextField
          className={classes.textField}
          autoFocus
          id="outlined-todo"
          variant="outlined"
          placeholder="なにをする？"
          margin="dense"
          onChange={handleChangeTitle}
          value={title}
          style={{ width: "100%" }}
          required
        />
        <IconButton
          className={classes.oneLineButton}
          variant="contained"
          color="inherit"
          onClick={handleExpand}
          size="small"
        >
          {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        <Button
          className={classes.oneLineButton}
          type="submit"
          variant="contained"
          color="secondary"
          disabled={!title}
        >
          <SendIcon />
        </Button>
      </div>
      <Collapse in={isExpand}>
        <TextField
          fullWidth
          className={classes.textField}
          id="outlined-description"
          label="詳細"
          variant="outlined"
          margin="dense"
          value={description}
          onChange={handleChangeDescription}
        />
        <TextField
          fullWidth
          className={classes.textField}
          id="outlined-date"
          label="期限"
          variant="outlined"
          type="date"
          margin="dense"
          value={limit}
          onChange={handleChangeLimit}
        />
      </Collapse>
    </form>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: bindActionCreators(addTodo, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TodoAddForm));
