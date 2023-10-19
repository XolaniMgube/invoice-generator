import { useState } from "react";

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
      fullPrice: price * quantity
    };

    handleAddNewItem(newMaterial);
    handleTotal(price * quantity);

    setItem("");
    setQuantity("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="text"
        placeholder="Qty"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <button>Submit</button>
    </form>
  );
}
