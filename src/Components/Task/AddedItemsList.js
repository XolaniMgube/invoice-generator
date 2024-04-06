import AddedItem from "./AddedItem";
import { FiUpload } from "react-icons/fi";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { CSVLink } from "react-csv";



export default function AddedItemsList({
  material,
  handleFilterOnDelete,
  handleOpenEdit,
  handleEdit,
  handleOpenTotals,
  csvLink,
  firebaseMaterial,
  getMaterialList
}) {

   
  return (
    <div className="h-full">
      <div className="bg-white p-3 rounded-lg shadow">
        <div className="flex mb-3">
          <h4 className="w-1/2 font-bold">Material</h4>
          <div className="w-1/2 flex justify-end">
            <button className="rounded bg-orange text-white px-5 py-1 text-sm me-2 flex items-center hover:text-labelGrey">
              <span className="me-2">
                <CSVLink {...csvLink} className="no-underline text-white">Export excel</CSVLink>
              </span>
              <FiUpload />
            </button>

            <button
              className="rounded bg-orange text-white px-5 py-1 text-sm flex items-center"
              onClick={handleOpenTotals}
            >
              <span className="me-2">View totals</span>
              <FaArrowRightToBracket />
            </button>
          </div>
        </div>
        <table className="table-auto w-full">
          <thead className="bg-materialHeader">
            <tr>
              <th className="text-sm py-3 ps-2">No.</th>
              <th className="text-sm py-3">Item Name</th>
              <th className="text-sm py-3">Quantity</th>
              <th className="text-sm py-3">Single Price</th>
              <th className="text-sm py-3">Total Price</th>
              <th className="text-sm py-3">Action</th>
            </tr>
          </thead>
          {/* <tbody style={{ maxHeight: "100px", overflowY: "scroll" }}>
            {material.map((mat, i) => (
              <AddedItem
                mat={mat}
                key={crypto.randomUUID()}
                handleFilterOnDelete={handleFilterOnDelete}
                index={i}
                handleOpenEdit={handleOpenEdit}
                handleEdit={handleEdit}
                firebaseMaterial={firebaseMaterial}
              />
            ))}
          </tbody> */}
          <tbody style={{ maxHeight: "100px", overflowY: "scroll" }}>
            {firebaseMaterial.map((mat, i) => (
              <AddedItem
                mat={mat}
                key={crypto.randomUUID()}
                handleFilterOnDelete={handleFilterOnDelete}
                index={i}
                handleOpenEdit={handleOpenEdit}
                handleEdit={handleEdit}
                getMaterialList={getMaterialList}
                // firebaseMaterial={firebaseMaterial}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
