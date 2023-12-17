import { useState } from "react";
import { Button, Form, Container, InputGroup } from "react-bootstrap";
import api from "../api/invoice-data";

export function ItemForm({ handleTotal, handleAddNewItem }) {
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
      {/* <Form onSubmit={handleSubmit} className="py-3">
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
      </Form> */}

      <form className="py-3" action="" onSubmit={handleSubmit}>
        <div>
          <div className="border-2 rounded mb-2 p-1">
            <div className="">
              <label htmlFor="item" className="w-full">Item</label>
            </div>
            <input
              id="item"
              className="focus:outline-none rounded w-full"
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <div className="flex">
            <div className="border-2 rounded w-1/2 me-1 p-1">
              <div>
                <label htmlFor="quantity" className="w-full">Quantity</label>
              </div>
              <input
                id="quantity"
                className="focus:outline-none w-full"
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="border-2 rounded w-1/2 ms-1 p-1">
              <div>
                <label htmlFor="price" className="w-full">Price</label>
              </div>
              <input
                id="price"
                className="focus:outline-none w-full"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="my-2 rounded">
            <button type="submit" className="bg-active px-12 py-3 font-bold text-white rounded ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
