import users from "../../db/db.js";
import TableComponent from "./TableComponent.jsx";

function Customers() {
  const headers = ["Name", "Email", "Default Payment", "Created Date"];
  const keys = ["name", "email", "default_source", "created"];
  return (
    // <Table striped>
    //   <TableHead>
    //     <TableRow>
    //       <TableHeader>Name</TableHeader>
    //       <TableHeader>Email</TableHeader>
    //       <TableHeader>Default Payment</TableHeader>
    //       <TableHeader>Created Date</TableHeader>
    //     </TableRow>
    //   </TableHead>
    //   <TableBody>
    //     {users.map((customer) => (
    //       <TableRow key={customer.id}>
    //         <TableCell className="font-medium">{customer.name}</TableCell>
    //         <TableCell>{customer.email}</TableCell>
    //         <TableCell>{customer.default_source}</TableCell>
    //         <TableCell className="text-zinc-500">{customer.created}</TableCell>
    //       </TableRow>
    //     ))}
    //   </TableBody>
    // </Table>
    <TableComponent users={users} headers={headers} keys={keys} />
  );
}
export default Customers;
