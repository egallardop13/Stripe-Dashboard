import React from "react";
import items from "../../db/productsDB";
import TableComponent from "./TableComponent";

const Products = () => {
  const headers = ["ID", "Name", "Price", "Material"];
  const keys = ["id", "name", "price", "metadata"];

  const objectKeys = [{ price: "unit_amount" }, { metadata: "material" }];
  return (
    <TableComponent
      users={items}
      objectKeys={objectKeys}
      headers={headers}
      keys={keys}
    />
  );
};

export default Products;
