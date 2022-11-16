import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Employee, ID, Age, salary, Table) {
  return {Employee, ID, Age, salary, Table };
}

const rows = [
  createData('Narendran', 1, 22, 24000, 4.0),
  createData('Priya', 2, 24, 30000, 4.1),
  createData('Shreedar', 3, 22, 24000, 4.2),
  createData('Dhanam', 4, 23, 27000, 4.3),
  createData('Dhivya', 5, 20, 22000, 4.4),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee </TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Age&nbsp;</TableCell>
            <TableCell align="right">salary&nbsp;</TableCell>
            <TableCell align="right">Table&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Employee}
              </TableCell>
              <TableCell align="right">{row.ID}</TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell align="right">{row.Table}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}