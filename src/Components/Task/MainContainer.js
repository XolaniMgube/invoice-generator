import AddedItemsList from "./AddedItemsList";
import { ItemForm } from "./ItemForm";

export default function MainContainer({ handleTotal, handleAddNewItem, handleFilterOnDelete, material, handleOpenEdit, handleEdit, handleOpenTotals, csvLink }) {
  return (
    // <div className="w-10/12 mx-3 my-4 bg-white shadow-lg h-full">
    //   <div className=" p-4 rounded-xl h-full bg-transparent">
    //     <div>
    //       <h5>Generate Invoice</h5>
    //     </div>
        <div className="w-10/12 mx-5 my-5">
          <ItemForm handleAddNewItem={handleAddNewItem} handleTotal={handleTotal} />
          <AddedItemsList handleFilterOnDelete={handleFilterOnDelete} material={material} handleOpenEdit={handleOpenEdit} handleEdit={handleEdit} handleOpenTotals={handleOpenTotals} csvLink={csvLink} />
        </div>
    //   </div>
    // </div>
  );
}
