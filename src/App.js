import { useState } from "react";
import ItemForm from "./ItemForm";
import Total from "./Total";
import AddedItemsList from "./AddedItemsList";
import TaxAmounts from "./TaxAmounts";

const list = [
  // {
  //   itemName: "cement",
  //   quantity: 4,
  //   price: 60
  // },
  // {
  //   itemName: "gravel",
  //   quantity: 2,
  //   price: 100
  // }
]

function App() {
  const [material, setMaterial] = useState(list)
  const [total, setTotal] = useState(0);

  function handleTotal(value) {
    console.log(value)
    setTotal(cur => cur + value)
  }

  function handleAddNewItem(newMaterial) {
    setMaterial(currentMaterial => [...currentMaterial, newMaterial])
  }

  return (
    <div className="app">
      <ItemForm handleTotal={handleTotal} handleAddNewItem={handleAddNewItem} />
      <AddedItemsList material={material} />
      <Total total={total} />
      <TaxAmounts total={total} />
    </div>
  );
}

export default App;
