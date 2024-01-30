import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import api from "../api/invoice-data";

import { useEffect, useState } from "react";

import Nav from "../Components/Fragments/Nav";
import Sidebar from "../Components/Fragments/Sidebar";
import MainContainer from "../Components/Task/MainContainer";

import { CSVLink } from "react-csv";
import TotalsContainer from "../Components/Task/TotalsContainer";
import EditModal from "../Components/Task/EditModal";
import { RiNumbersFill } from "react-icons/ri";

function Task() {
  const [material, setMaterial] = useState([]);
  const [total, setTotal] = useState(0);
  const [openEdit, setOpenEdit] = useState(false);
  const [openTotals, setOpenTotals] = useState(false);
  const [taxAmount, setTaxAmount] = useState(0);
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

  // console.log(...csvLink)

  return (
    <div className="bg-simple-gradient">
      <Nav />
      <div className="flex">
        <Sidebar />
        <MainContainer
          handleAddNewItem={handleAddNewItem}
          material={material}
          handleFilterOnDelete={handleFilterOnDelete}
          handleOpenEdit={handleOpenEdit}
          handleEdit={handleEdit}
          handleOpenTotals={handleOpenTotals}
          csvLink={csvLink}
        />

        {/* <div md={10} className="mx-auto">
          <button className=" bg-active py-3 px-20 ">
            <CSVLink
              {...csvLink}
              className="text-white no-underline py-3 px-20"
            >
              Export
            </CSVLink>
          </button>
        </div> */}

      </div>
      {openTotals ? (
        <TotalsContainer
          total={total}
          material={material}
          handleCloseTotals={handleCloseTotals}
        />
      ) : null}

      {openEdit ? (
        <EditModal
          handleCloseEdit={handleCloseEdit}
          handleEdit={handleEdit}
          material={material}
          parseId={parseId}
        />
      ) : null}
    </div>
  );
}

export default Task;
