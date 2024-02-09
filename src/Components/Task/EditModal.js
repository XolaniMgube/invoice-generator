import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function EditModal({
  handleCloseEdit,
  material,
  parseId,
  handleEdit,
}) {
  const [itemToEdit, setItemToEdit] = useState("");
  const [qauntityToEdit, setQauntityToEdit] = useState("");
  const [singlePriceToEdit, setSinglePriceToEdit] = useState("");

  const rowToEdit = {
    itemName: itemToEdit,
    quantity: qauntityToEdit,
    singlePrice: singlePriceToEdit,
    fullPrice: Number(qauntityToEdit * singlePriceToEdit),
  };
  return (
    <div className="border bg-white shadow-lg rounded-lg p-3">
      <div className="flex justify-end">
        <button onClick={() => handleCloseEdit()}>
          <RxCross2 size={24} className="hover:cursor-pointer"/>
        </button>
      </div>
      <div className="px-5">
        <h4 className="font-bold">Edit Item</h4>
        <div className="w-full my-3">
          <div className="w-full">
            <input
              className="border-2 border-labelGrey rounded w-full p-2"
              type="text"
              placeholder="item..."
              onChange={(e) => setItemToEdit(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 me-2">
            <input
              className="border-2 border-labelGrey rounded w-full p-2"
              type="text"
              placeholder="quantity..."
              onChange={(e) => setQauntityToEdit(e.target.value)}
            />
          </div>
          <div className="w-1/2 ms-2">
            <input
              className="border-2 border-labelGrey rounded w-full p-2"
              type="text"
              placeholder="single price..."
              onChange={(e) => setSinglePriceToEdit(e.target.value)}
            />
          </div>
        </div>

        <div className="my-3 flex justify-end">
          <button
            onClick={() => handleEdit(parseId, rowToEdit)}
            className="bg-logoBlueThree rounded font-bold text-white text-sm h-[43px] border-2 border-logoBlueThree px-[60px]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
