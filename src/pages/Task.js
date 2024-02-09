import "bootstrap/dist/css/bootstrap.min.css";
import api from "../api/invoice-data";

import { useEffect, useState } from "react";
import MainContainer from "../Components/Task/MainContainer";

import TotalsContainer from "../Components/Task/TotalsContainer";
import EditModal from "../Components/Task/EditModal";

import { motion } from "framer-motion";

function Task() {
  const [material, setMaterial] = useState([]);
  const [total, setTotal] = useState(0);
  const [openEdit, setOpenEdit] = useState(false);
  const [openTotals, setOpenTotals] = useState(false);
  const [parseId, setParseId] = useState("");

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await api.get("/list");
        setMaterial(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchList();
  }, []);

  function handleTotal(value) {
    setTotal((cur) => cur + value);
  }

  function handleAddNewItem(newMaterial) {
    setMaterial((currentMaterial) => [...currentMaterial, newMaterial]);
  }

  async function handleFilterOnDelete(filtered) {
    try {
      await api.delete(`/list/${filtered.id}`);
      const leftAfterDelete = material.filter(
        (item) => item.id !== filtered.id
      );
      setMaterial(leftAfterDelete);
      handleTotal(-filtered.fullPrice);
    } catch (err) {
      console.log("error: " + err.message);
    }
  }

  function handleOpenEdit(id) {
    setParseId(id);
    setOpenEdit(true);
  }

  function handleCloseEdit() {
    setOpenEdit(false);
  }

  function handleOpenTotals() {
    setOpenTotals(true);
  }

  function handleCloseTotals() {
    setOpenTotals(false);
  }

  async function handleEdit(id, rowToEdit) {
    try {
      const response = await api.put(`/list/${id}`, rowToEdit);
      const edited = material.map((mat) =>
        mat.id === id ? { ...rowToEdit } : mat
      );
      setMaterial(edited);
    } catch (err) {
      console.error(err);
    }

    handleCloseEdit();
  }

  const headers = [
    {
      label: "itemName",
      key: "itemName",
    },
    {
      label: "quantity",
      key: "quantity",
    },
    {
      label: "singlePrice",
      key: "singlePrice",
    },
    {
      label: "fullPrice",
      key: "fullPrice",
    },
  ];

  const csvLink = {
    filename: "file.csv",
    headers: headers,
    data: material,
  };

  return (
    <>
      <MainContainer
        handleAddNewItem={handleAddNewItem}
        material={material}
        handleFilterOnDelete={handleFilterOnDelete}
        handleOpenEdit={handleOpenEdit}
        handleEdit={handleEdit}
        handleOpenTotals={handleOpenTotals}
        csvLink={csvLink}
      />
      {openTotals ? (
        <motion.div
          className="w-3/12 absolute right-0 top-12"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
        >
          <TotalsContainer
            total={total}
            material={material}
            handleCloseTotals={handleCloseTotals}
          />
        </motion.div>
      ) : null}

      {openEdit ? (
        <motion.div
          className="w-6/12 mx-auto absolute top-56 left-96"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: [0.5, 0.71, 0.2, 1.01],
          }}
        >
          <EditModal
            handleCloseEdit={handleCloseEdit}
            handleEdit={handleEdit}
            material={material}
            parseId={parseId}
          />
        </motion.div>
      ) : null}
    </>
  );
}

export default Task;
