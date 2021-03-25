import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.red,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(alert, when, what,) {
  return { alert, when, what};
}

const rows = [
  createData('Big puddle', 'today', 'Safety Warning'),
  createData('Fallen Tree', 'yesterday', 'Safety Warning'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Alerts() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Alerts</StyledTableCell>
            <StyledTableCell align="right">when</StyledTableCell>
            <StyledTableCell align="right">what</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.alert}>
              <StyledTableCell component="th" scope="row">
                {row.alert}
              </StyledTableCell>
              <StyledTableCell align="right">{row.when}</StyledTableCell>
              <StyledTableCell align="right">{row.what}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}