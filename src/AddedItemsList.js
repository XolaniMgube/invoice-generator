import AddedItem from "./AddedItem";
import { Table } from "react-bootstrap";

export default function AddedItemsList({ material, handleFilterOnDelete }) {
  return (
    // <div className="added-items-list">
    //

    // </div>

    <Table striped bordered hover className="bg-green">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Quality</th>
          <th>Single Price</th>
          <th>Total Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {material.map((mat) => (
          <AddedItem mat={mat} key={crypto.randomUUID()} handleFilterOnDelete={handleFilterOnDelete} />
        ))}
      </tbody>
    </Table>
  );
}
