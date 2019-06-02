import React, { useState } from "react";

import IdPassEditForm from "./IdPassEditForm";
import Link from "@material-ui/core/Link";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

function TodoItem(props) {
  const { id, title, url, account, hint, description, isEditMode } = props;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row" size="small">
        <Link
          href={url}
          target="_blank"
          rel="noopener"
          style={{ width: "100%" }}
        >
          {title}
        </Link>
      </TableCell>
      <TableCell size="small">{account}</TableCell>
      <TableCell
        size="small"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {hint && (isHovering ? hint : "**********")}
      </TableCell>
      <TableCell size="small">{description}</TableCell>
      <TableCell size="small">
        <IdPassEditForm
          id={id}
          title={title}
          url={url}
          account={account}
          hint={hint}
          description={description}
          isEditMode={isEditMode}
        />
      </TableCell>
    </TableRow>
  );
}

export default withStyles(styles)(TodoItem);
