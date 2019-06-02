import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import EditLinkForm from "./LinkAddForm";
import FolderIcon from "@material-ui/icons/Folder";
import Grid from "@material-ui/core/Grid";
import GroupEditForm from "./GroupEditForm";
import LinkItem from "./LinkItem";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cardHeader: {
    paddingBottom: 0
  }
});

function Group(props) {
  const { groupId, title, description, items, isEditMode, classes } = props;

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          className={classes.cardHeader}
          avatar={<FolderIcon />}
          title={title}
          subheader={description}
          action={
            <GroupEditForm
              groupId={groupId}
              title={title}
              description={description}
              isEditMode={isEditMode}
            />
          }
        />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            {items.map(item => (
              <Grid item xs={12} md={3} key={item.id}>
                <LinkItem
                  groupId={groupId}
                  itemId={item.id}
                  title={item.title}
                  url={item.url}
                  description={item.description}
                  isEditMode={isEditMode}
                />
              </Grid>
            ))}
            {isEditMode && <EditLinkForm groupId={groupId} />}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(Group);
