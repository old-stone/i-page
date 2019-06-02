import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import List from "@material-ui/core/List";
import ListAltIcon from "@material-ui/icons/ListAlt";
import React from "react";
import TodoAddForm from "./TodoAddForm";
import TodoItem from "./TodoItem";
import grey from "@material-ui/core/colors/grey";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    backgroundColor: grey[900]
  },
  progress: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: grey[800]
  }
});

function TodoApp(props) {
  const { app, isEditMode, classes } = props;
  const { title, description, todos } = app;

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<ListAltIcon />}
        title={title}
        subheader={description}
      />
      <CardContent>
        <Grid container spacing={2} />
        <Grid item xs={12}>
          <TodoAddForm />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <List dense={true}>
              <LinearProgress
                className={classes.progress}
                color="secondary"
                variant="determinate"
                value={
                  (todos.filter(todo => todo.isChecked).length / todos.length) *
                  100
                }
              />
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  limit={todo.limit}
                  isChecked={todo.isChecked}
                  isEditMode={isEditMode}
                />
              ))}
            </List>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(TodoApp);
