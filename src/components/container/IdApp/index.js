import AccountCardIcon from "../../presentational/atoms/AccountCard";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IdPass from "./IdPass";
import IdPassAddForm from "./IdPassAddForm";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import grey from "@material-ui/core/colors/grey";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    backgroundColor: grey[900]
  },
  cardHeader: {
    paddingBottom: 0
  },
  cardContent: {
    paddingTop: 0
  },
  table: {
    marginBottom: theme.spacing(2)
  }
});

function IdApp(props) {
  const { app, isEditMode, classes } = props;
  const { title, description, items } = app;
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<AccountCardIcon />}
        title={title}
        subheader={description}
      />
      <CardContent className={classes.cardContent}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell size="small" style={{ width: "20%" }}>
                対象サービス
              </TableCell>
              <TableCell size="small" style={{ width: "20%" }}>
                ID
              </TableCell>
              <TableCell size="small" style={{ width: "25%" }}>
                パスワードのヒント
              </TableCell>
              <TableCell size="small" style={{ width: "30%" }}>
                補足
              </TableCell>
              <TableCell size="small" style={{ width: "5%" }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <IdPass
                key={item.id}
                id={item.id}
                title={item.title}
                url={item.url}
                account={item.account}
                hint={item.hint}
                description={item.description}
                isEditMode={isEditMode}
              />
            ))}
          </TableBody>
        </Table>
        {isEditMode && <IdPassAddForm />}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(IdApp);
