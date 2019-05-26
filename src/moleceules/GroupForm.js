import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addGroup } from "../modules/groups";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
});

class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      name: "",
      description: ""
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    const { name, description } = this.state;
    const { addGroup } = this.props;
    addGroup(name, description);
    this.setState({
      name: "",
      description: ""
    });
  };

  changeName = e => {
    this.setState({ name: e.target.value });
  };

  changeDescription = e => {
    this.setState({ description: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const { addGroup } = this.props;
    const { name, description } = this.state;

    return (
      <form
        className={classes.container}
        onSubmit={this.onFormSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="名称"
          className={classes.textField}
          value={name}
          margin="normal"
          variant="outlined"
          onChange={this.changeName}
        />
        <TextField
          id="outlined-description"
          label="詳細"
          className={classes.textField}
          value={description}
          margin="normal"
          variant="outlined"
          onChange={this.changeDescription}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!this.state.name}
        >
          グループ追加
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addGroup: bindActionCreators(addGroup, dispatch)
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GroupForm)
);
