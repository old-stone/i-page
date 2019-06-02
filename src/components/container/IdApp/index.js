import AccountCardIcon from "../../presentational/atoms/AccountCard";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import grey from "@material-ui/core/colors/grey";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    backgroundColor: grey[900]
  }
});

function IdApp(props) {
  const { app, isEditMode, classes } = props;
  const { title, description, items } = app;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<AccountCardIcon />}
        title={title}
        subheader={description}
      />
      <CardContent>
        {/* {groups.map(groupId => {
          const group = groupsReducer.byId[groupId];
          return <LinkGroup key={group.id} groupId={group.id} />;
        })} */}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(IdApp);
