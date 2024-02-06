import AddedItemsList from "./AddedItemsList";
import { ItemForm } from "./ItemForm";
import { motion } from "framer-motion";

export default function MainContainer({
  handleTotal,
  handleAddNewItem,
  handleFilterOnDelete,
  material,
  handleOpenEdit,
  handleEdit,
  handleOpenTotals,
  csvLink,
}) {
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
      <ItemForm handleAddNewItem={handleAddNewItem} handleTotal={handleTotal} />
      <AddedItemsList
        handleFilterOnDelete={handleFilterOnDelete}
        material={material}
        handleOpenEdit={handleOpenEdit}
        handleEdit={handleEdit}
        handleOpenTotals={handleOpenTotals}
        csvLink={csvLink}
      />
    </motion.div>
  );
}
