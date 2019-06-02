import AddGroupForm from "./AddGroupForm";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Group from "./Group";
import LinkIcon from "@material-ui/icons/Link";
import React from "react";
import grey from "@material-ui/core/colors/grey";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    backgroundColor: grey[900]
  }
});

function LinkApp(props) {
  const { app, isEditMode, classes } = props;
  const { title, description, groups } = app;

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<LinkIcon />}
        title={title}
        subheader={description}
      />
      <CardContent>
        <Grid container spacing={2}>
          {groups.map(group => {
            return (
              <Group
                key={group.id}
                groupId={group.id}
                title={group.title}
                description={group.description}
                items={group.items}
                isEditMode={isEditMode}
              />
            );
          })}
          {isEditMode && <AddGroupForm />}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(LinkApp);
