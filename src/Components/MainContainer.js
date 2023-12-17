import AddedItemsList from "./AddedItemsList";
import { ItemForm } from "./ItemForm";

export default function MainContainer({ handleTotal, handleAddNewItem, handleFilterOnDelete, material }) {
  return (
    <div className="w-6/12 p-3 h-screen">
      <div className=" p-4 border-2 border-orange rounded-xl h-full">
        <div>
          <h3>Generate Invoice</h3>
        </div>
        <div>
          <ItemForm handleAddNewItem={handleAddNewItem} handleTotal={handleTotal} />
          <AddedItemsList handleFilterOnDelete={handleFilterOnDelete} material={material} />
        </div>
      </div>
    </div>
  );
}
