import AddedItemsList from "./AddedItemsList";
import { ItemForm } from "./ItemForm";
import { motion } from "framer-motion";
import { db } from "../../config/firebase"
import {getDocs, collection} from "firebase/firestore"
import { useEffect, useState } from "react";

export default function MainContainer({
  handleTotal,
  handleAddNewItem,
  handleFilterOnDelete,
  material,
  handleOpenEdit,
  handleEdit,
  handleOpenTotals,
  csvLink,
  firebaseMaterial,
  getMaterialList,
}) {

  // const [fbMaterial, setFBMaterial] = useState([])
  // const materialListRef = collection(db, "materialList")

  // const getMaterialList = async () => {
  //   try {
  //     const data = await getDocs(materialListRef);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(), id: doc.id
  //     }))
  //     console.log(filteredData)
  //     setFBMaterial(filteredData)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // useEffect(() => {
  //   getMaterialList()
  // }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.5, 0.71, 0.2, 1.01],
      }}
      className="w-10/12 mx-5 my-5"
    >
      <ItemForm handleAddNewItem={handleAddNewItem} handleTotal={handleTotal} material={material} getMaterialList={getMaterialList} />
      <AddedItemsList
        handleFilterOnDelete={handleFilterOnDelete}
        material={material}
        handleOpenEdit={handleOpenEdit}
        handleEdit={handleEdit}
        handleOpenTotals={handleOpenTotals}
        csvLink={csvLink} 
        firebaseMaterial={firebaseMaterial}
        getMaterialList={getMaterialList}
      />
      <div>
        {/* {fbMaterial.map((thing) => (
          <h1>{thing.materialItem}</h1>
        ))} */}
        
      </div>
    </motion.div>
  );
}
