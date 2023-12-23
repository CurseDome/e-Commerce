import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const data = [
  {
    Date: "20 may 1006",
    query_type: "return",
    product_type: "mobiles",
    payment_id: 6984,
  },
  {
    Date: "23 may 1006",
    query_type: "damaged",
    product_type: "furniture",
    payment_id: 6344,
  },
  {
    Date: "28 june 1006",
    query_type: "replace",
    product_type: "home appliences",
    payment_id: 9884,
  },
  {
    Date: "12 july 1006",
    query_type: "return",
    product_type: "m0biles",
    payment_id: 3484,
  },
];
export default function CousterData() {
  return (
    <div>
      <TableContainer className="mt-20 ">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>DATE</TableCell>
              <TableCell>QUERY TYPE</TableCell>
              <TableCell>PRODUCT TYPE</TableCell>
              <TableCell>PAYMENT ID</TableCell>
              <TableCell>DELETE</TableCell>
            </TableRow>
          </TableHead>
          {data.map((data, i) => (
            <TableBody>
              <TableRow>
                <TableCell>{data.Date}</TableCell>
                <TableCell>{data.query_type}</TableCell>
                <TableCell>{data.product_type}</TableCell>
                <TableCell>{data.payment_id}</TableCell>
                <TableCell>❌</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}
