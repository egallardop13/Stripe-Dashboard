import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Tab } from "@headlessui/react";

function TableComponent({ users, headers, keys }) {
  return (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableHeader>{headers[0]}</TableHeader>
          <TableHeader>{headers[1]}</TableHeader>
          <TableHeader>{headers[2]}</TableHeader>
          <TableHeader>{headers[3]}</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {users.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell className="font-medium">{customer.}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.default_source}</TableCell>
            <TableCell className="text-zinc-500">{customer.created}</TableCell>
          </TableRow>
        ))} */}
        {console.log(users[0].prices[0].unit_amount)}
        {console.log(keys)}

        {users.map((customer) => (
          <TableRow key={customer.id}>
            {keys.map((key) => (
              <TableCell
                key={key}
                className={
                  key === "name"
                    ? "font-medium"
                    : key === "created"
                    ? "text-zinc-500"
                    : ""
                }
              >
                {customer[key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableComponent;
