import React from "react";
import items from "../../db/productsDB";
import TableComponent from "./TableComponent";

const Products = () => {
  const headers = ["ID", "Name", "Price", "Size"];
  const keys = ["id", "name", "prices.unit_amount", "metadata.material"];
  return <TableComponent users={items} headers={headers} keys={keys} />;
};

export default Products;
