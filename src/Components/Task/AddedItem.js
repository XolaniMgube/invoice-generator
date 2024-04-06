import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPenAlt } from "react-icons/fa";
import { useState } from "react";

import { db } from "../../config/firebase";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";

export default function AddedItem({
  mat,
  handleFilterOnDelete,
  index,
  handleOpenEdit,
  getMaterialList
}) {
  function handleDelete(e) {
    e.preventDefault();
    handleFilterOnDelete(mat);
  }

   // Firebase
   const firebaseMaterialRef = collection(db, "materialList");

   const handleDeleteMaterial = async (id) => {
     try {
       const materialDoc = doc(db, "materialList", id);
       await deleteDoc(materialDoc);
       getMaterialList();
     } catch (err) {
       console.error(err);
     }
   };

  return (
    // <tr className="hover:bg-materialHeader">
    //   <td className="py-2 ps-2 font-bold">{index + 1}.</td>
    //   <td className="py-2 ps-1">{mat.itemName}</td>
    //   <td className="py-2 ps-1">{Number(mat.quantity).toFixed(1)}</td>
    //   <td className="py-2 ps-1">R{Number(mat.singlePrice).toFixed(2)}</td>
    //   <td className="py-2 ps-1">R{Number(mat.fullPrice).toFixed(2)}</td>
    //   <td className="py-2 ps-1">
    //     <div className="flex">
    //       <div className="me-3">
    //         <button
    //           className="bg-iconBlue p-2 rounded-2 text-cream text-xs font-bold"
    //           onClick={() => handleOpenEdit(mat.id)}
    //         >
    //           <FaPenAlt color="white" size="12" />

    //         </button>
    //       </div>
    //       <div>
    //         <button
    //           className="bg-delete p-2 rounded text-cream text-xs font-bold"
    //           onClick={(e) => handleDelete(e)}
    //         >
    //           <RiDeleteBin5Line color="white" size="12" />

    //         </button>
    //       </div>
    //     </div>
    //   </td>
    // </tr>
    <tr className="hover:bg-materialHeader">
      <td className="py-2 ps-2 font-bold">{index + 1}.</td>
      <td className="py-2 ps-1">{mat.materialItem}</td>
      <td className="py-2 ps-1">{Number(mat.materialQuantity).toFixed(1)}</td>
      <td className="py-2 ps-1">R{Number(mat.materialPrice).toFixed(2)}</td>
      <td className="py-2 ps-1">R{Number(mat.materialSum).toFixed(2)}</td>
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
              onClick={() => handleDeleteMaterial(mat.id)}
            >
              <RiDeleteBin5Line color="white" size="12" />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
