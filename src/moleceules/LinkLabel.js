import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class LinkLabel extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    const { name, url, description, classes } = this.props;

    return (
      <Card
        className={classes.card}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <Tooltip title={description}>
          <Link
            href={url}
            className={classes.link}
            target="_blank"
            rel="noopener"
          >
            {name}
          </Link>
        </Tooltip>
        {this.state.isHovering && (
          <IconButton className={classes.button} aria-label="Edit">
            <EditIcon />
          </IconButton>
        )}
      </Card>
    );
  }
}

export default withStyles(styles)(LinkLabel);
