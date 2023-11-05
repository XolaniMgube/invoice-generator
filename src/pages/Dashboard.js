import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import api from "../api/invoice-data";

import { useEffect, useState } from "react";

import ItemForm from "../Components/ItemForm";
import Total from "../Components/Total";
import AddedItemsList from "../Components/AddedItemsList";
import TaxAmounts from "../Components/TaxAmounts";
import Nav from "../Components/Nav";
import Sidebar from "../Components/Sidebar";

import { CSVLink } from "react-csv";

const list = [];

function App() {
  const [material, setMaterial] = useState([]);
  const [total, setTotal] = useState(0);

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
    console.log(value);
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

  console.log(material);

  // const data = material;

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
    <div className="flex">
      {/* <Nav /> */}
      <Sidebar />
      <Container>
        <Row className="mt-5">
          <Col md={10} className="mx-auto text-center">
            <h1>Generate Invoice</h1>
          </Col>
          <Col md={10} className="mx-auto">
            <ItemForm
              handleTotal={handleTotal}
              handleAddNewItem={handleAddNewItem}
            />
            <AddedItemsList
              material={material}
              handleFilterOnDelete={handleFilterOnDelete}
            />
          </Col>
          <Col md={10} className="mx-auto">
            <TaxAmounts total={total} />
            {/* <Total total={total} /> */}
            <button className=" bg-active py-3 px-20 ">
              <CSVLink {...csvLink} className="text-white no-underline py-3 px-20">Export</CSVLink>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
