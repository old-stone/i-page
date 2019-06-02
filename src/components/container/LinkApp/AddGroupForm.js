import React, { Component } from "react";

import AddButton from "../../presentational/moleceules/AddButton";
import Button from "@material-ui/core/Button";
import FormDialog from "../../presentational/moleceules/FormDialog";
import TextField from "@material-ui/core/TextField";
import { addLinkGroup } from "../../../modules/linkApp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({});

class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      isOpen: false
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    const { addLinkGroup } = this.props;
    addLinkGroup(title, description);
    this.handleClose();
  };

  changeTitle = e => {
    this.setState({ title: e.target.value });
  };

  changeDescription = e => {
    this.setState({ description: e.target.value });
  };

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({
      title: "",
      description: "",
      isOpen: false
    });
  };

  render() {
    const { classes } = this.props;
    const { title, description, isOpen } = this.state;

    return (
      <>
        <AddButton xs={12} md={12} handleClickOpen={this.handleClickOpen} />
        <FormDialog
          title="グループを追加する"
          fields={[
            <TextField
              key="title"
              autoFocus
              id="outlined-name"
              label="タイトル"
              className={classes.textField}
              value={title}
              variant="outlined"
              onChange={this.changeTitle}
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
              onChange={this.changeDescription}
              margin="dense"
              fullWidth
            />
          ]}
          buttons={[
            <Button
              key="cancelButton"
              onClick={this.handleClose}
              color="primary"
            >
              キャンセル
            </Button>,
            <Button
              key="addButton"
              type="submit"
              color="primary"
              disabled={!this.state.title}
            >
              追加
            </Button>
          ]}
          isOpen={isOpen}
          onFormSubmit={this.onFormSubmit}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addLinkGroup: bindActionCreators(addLinkGroup, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(GroupForm));
