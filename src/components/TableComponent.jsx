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

/**
  Configuration for tables:
  users string[]
  headers string[]
  keys [] strings
   
  objectKeys = object whose properties are arrays

  
  
  
  
  */

function TableComponent({ users, headers, keys, objectKeys }) {
  let tempKeys;
  const getInfo = (customer, property) => {
    let info = customer[property];
    objectKeys.map((item) => {
      if (item[property]) {
        info = info[item[property]];
      }
    });
    return info;
  };

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
            <TableCell className="font-medium">{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.default_source}</TableCell>
            <TableCell className="text-zinc-500">{customer.created}</TableCell>
          </TableRow>
        ))} */}

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
                {typeof customer[key] === "object" ? (
                  <>
                    {/* {tempKeys = split(key, ".")} */}
                    {/* ["price", "unit_amount"] */}
                    {getInfo(customer, key)}
                  </>
                ) : (
                  customer[key]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableComponent;
