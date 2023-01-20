import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getData } from "../../utility/getData";
import { createRows } from "./functions";

const TableComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const run = async () => {
      const result = await getData();
      setData(result);
    };
    run();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Principal Amount</TableCell>
            <TableCell align="right">Compound Interest</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createRows(data).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.principalAmount}</TableCell>
              <TableCell align="right">{row.interestPaid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
