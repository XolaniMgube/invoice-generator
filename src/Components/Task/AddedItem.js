import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPenAlt } from "react-icons/fa";
import { useState } from "react";

export default function AddedItem({ mat, handleFilterOnDelete, index, handleOpenEdit, handleEdit }) {

  function handleDelete(e) {
    e.preventDefault();
    handleFilterOnDelete(mat);
  }

  return (
    <tr className="hover:bg-materialHeader">
      <td className="py-2 ps-2 font-bold">{index + 1}.</td>
      <td className="py-2 ps-1">{mat.itemName}</td>
      <td className="py-2 ps-1">{Number(mat.quantity).toFixed(1)}</td>
      <td className="py-2 ps-1">R{Number(mat.singlePrice).toFixed(2)}</td>
      <td className="py-2 ps-1">R{Number(mat.fullPrice).toFixed(2)}</td>
      <td className="py-2 ps-1">
        <div className="flex">
          <div className="me-3">
            <button
              className="bg-iconBlue p-2 rounded-2 text-cream text-xs font-bold"
              onClick={() => handleOpenEdit(mat.id)}
            >
              <FaPenAlt color="white" size="12" />
              
            </button>
          </div>
          <div>
            <button
              className="bg-delete p-2 rounded text-cream text-xs font-bold"
              onClick={(e) => handleDelete(e)}
            >
              <RiDeleteBin5Line color="white" size="12" />
              
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
