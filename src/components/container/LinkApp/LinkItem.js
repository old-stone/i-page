import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Link from "@material-ui/core/Link";
import LinkEditForm from "./LinkEditForm";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

function LinkItem(props) {
  const {
    groupId,
    itemId,
    title,
    url,
    description,
    isEditMode,
    classes
  } = props;

  return (
    <div className={classes.root}>
      <ArrowRightIcon size="small" />
      <Tooltip title={description}>
        <Link
          href={url}
          target="_blank"
          rel="noopener"
          style={{ width: "100%" }}
        >
          <Typography variant="body2">{title}</Typography>
        </Link>
      </Tooltip>
      <LinkEditForm
        groupId={groupId}
        itemId={itemId}
        title={title}
        url={url}
        description={description}
        isEditMode={isEditMode}
      />
    </div>
  );
}

export default withStyles(styles)(LinkItem);
