import { useState } from "react";
import { Button, Form, Container, InputGroup } from "react-bootstrap";

export default function Item({ handleTotal, handleAddNewItem }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMaterial = {
      itemName: item,
      quantity: quantity,
      singlePrice: price,
      fullPrice: price * quantity,
    };

    handleAddNewItem(newMaterial);
    handleTotal(price * quantity);

    setItem("");
    setQuantity("");
    setPrice("");
  };

  return (
      <Form onSubmit={handleSubmit} className="py-3">
        <InputGroup>
          {/* <Form.Group> */}
            {/* <Form.Label>Item</Form.Label> */}
            <Form.Control
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              placeholder="Item"
            />
          {/* </Form.Group> */}
          {/* <Form.Group> */}
            {/* <Form.Label>Quantity</Form.Label> */}
            <Form.Control
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
            />
          {/* </Form.Group> */}

          {/* <Form.Group> */}
            {/* <Form.Label>Price</Form.Label> */}
            <Form.Control
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Price"
            />
          {/* </Form.Group> */}
          {/* <Form.Group> */}
            <Button type="submit">Submit</Button>
          {/* </Form.Group> */}
        </InputGroup>
      </Form>
  );
}
