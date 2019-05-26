import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addLink } from "../modules/links";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { groupFetchRequested } from "../modules/groups";
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

class LinkForm extends Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      name: "",
      url: "",
      description: ""
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    const { name, url, description } = this.state;
    const { addLink, groupFetchRequested, groupId } = this.props;
    addLink(name, url, description);
    groupFetchRequested(groupId);
    this.setState({
      name: "",
      url: "",
      isError: false,
      description: ""
    });
  };

  changeName = e => {
    this.setState({ name: e.target.value });
  };

  changeUrl = e => {
    const url = e.target.value;
    this.setState({
      url: url,
      isError:
        Boolean(url) &&
        !/https?:\/\/(www\.)?(?:localhost|[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*))/g.test(
          url
        )
    });
  };

  changeDescription = e => {
    this.setState({ description: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const { name, url, isError, description } = this.state;

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
          id="outlined-url"
          error={isError}
          helperText={isError && "フォーマットエラー"}
          label="URL"
          className={classes.textField}
          value={url}
          margin="normal"
          variant="outlined"
          onChange={this.changeUrl}
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
          disabled={!(name && !isError && url)}
        >
          追加
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
    addLink: bindActionCreators(addLink, dispatch),
    groupFetchRequested: bindActionCreators(groupFetchRequested, dispatch)
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LinkForm)
);
