import "./App.css";

import GroupForm from "../moleceules/GroupForm";
import LinkGroup from "../moleceules/LinkGroup";
import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  App: {
    maxWidth: 720
  }
});

function App(props) {
  const { groupsReducer } = props;
  return (
    <div className="App">
      {groupsReducer.allIds.map(groupId => (
        <LinkGroup key={groupId} groupId={groupId} />
      ))}
      <GroupForm />
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    groupsReducer: state.groupsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
