import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import LinkForm from "./LinkForm";
import LinkLabel from "./LinkLabel";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    margin: theme.spacing(1)
  }
});

class LinkGroup extends Component {
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
    const { groupId, classes } = this.props;
    const { groupsReducer, linksReducer } = this.props;

    const group = groupsReducer.byId[groupId];
    return (
      <Card className={classes.card}>
        <CardHeader
          title={group.name}
          subheader={group.description}
          action={
            this.state.isHovering && (
              <IconButton className={classes.button} aria-label="Edit">
                <EditIcon />
              </IconButton>
            )
          }
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        />
        <CardContent>
          {group.links.map(linkId => (
            <LinkLabel
              key={linkId}
              name={linksReducer.byId[linkId].name}
              url={linksReducer.byId[linkId].url}
              description={linksReducer.byId[linkId].description}
            />
          ))}
          <LinkForm groupId={groupId} />
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    groupsReducer: state.groupsReducer,
    linksReducer: state.linksReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LinkGroup)
);
