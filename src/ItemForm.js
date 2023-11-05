import { useState } from "react";
import { Button, Form, Container, InputGroup } from "react-bootstrap";
import api from "./api/invoice-data";

export default function Item({ handleTotal, handleAddNewItem }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMaterial = {
      id: crypto.randomUUID(),
      itemName: item,
      quantity: quantity,
      singlePrice: price,
      fullPrice: price * quantity,
    };

    try {
      const response = await api.post("/list", newMaterial);
      handleAddNewItem(response.data);
      handleTotal(price * quantity);
    } catch (err) {
      console.log("error" + err.message);
    }
    setItem("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="mx-auto">
      <Form onSubmit={handleSubmit} className="py-3">
        <InputGroup>
          <Form.Control
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Item"
          />
          <Form.Control
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Price"
          />
          <button type="submit" className="bg-active w-40 text-white">Submit</button>
        </InputGroup>
      </Form>
    </div>
  );
}
