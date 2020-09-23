import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const TransactionsTable = props => {
  const classes = useStyles();
  let spendEarnRatio = useSelector(state => state.dashboard.spendEarnRatio);
  let accountType = useSelector(state => state.dashboard.account_type);
  let currentBalance = useSelector(state => state.dashboard.current_balance);

  return (
    <>
      <div className="dashboardHeader">
        <p>
          Spend Earn Ratio: {spendEarnRatio}1.05 | Account Type: {accountType} |
          Current Balance: ${currentBalance}
        </p>
        <h5>Last Week's Transactions</h5>
      </div>
      <TableContainer component={Paper} className="tableContainer">
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead className="subContentHeaders">
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Amount in USD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="subContent">
            {props.transactions.map(transaction => (
              <TableRow key={transaction.date}>
                <TableCell component="th" scope="row">
                  {transaction.date}
                </TableCell>
                <TableCell align="right">{transaction.category}</TableCell>
                <TableCell align="right">{`${transaction.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionsTable;
