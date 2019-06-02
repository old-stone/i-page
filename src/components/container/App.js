import "./App.css";

import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Header from "../presentational/moleceules/Header";
import IdApp from "./IdApp/";
import LinkApp from "./LinkApp/";
import TodoApp from "./TodoApp/";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    margin: theme.spacing(2)
  }
});

function App(props) {
  const { classes } = props;
  const { todoAppReducer, idPassAppReducer, linkAppReducer } = props;

  const [isEditMode, setIsEditMode] = useState(false);

  const handleSwitch = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="App">
      <Header isEditMode={isEditMode} handleSwitch={handleSwitch} />

      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignContent="stretch"
          spacing={2}
        >
          <Grid item xs={12} md={4}>
            <TodoApp app={todoAppReducer} isEditMode={isEditMode} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <IdApp app={idPassAppReducer} isEditMode={isEditMode} />
              </Grid>
              <Grid item xs={12} md={12}>
                <LinkApp app={linkAppReducer} isEditMode={isEditMode} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todoAppReducer: state.todoAppReducer,
    idPassAppReducer: state.idPassAppReducer,
    linkAppReducer: state.linkAppReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
