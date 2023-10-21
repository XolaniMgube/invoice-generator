import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import { useState } from "react";

import ItemForm from "./ItemForm";
import Total from "./Total";
import AddedItemsList from "./AddedItemsList";
import TaxAmounts from "./TaxAmounts";
import Nav from "./Nav";

const list = [
  // {
  //   itemName: "cement",
  //   quantity: 4,
  //   price: 60
  // },
  // {
  //   itemName: "gravel",
  //   quantity: 2,
  //   price: 100
  // }
];

function App() {
  const [material, setMaterial] = useState(list);
  const [total, setTotal] = useState(0);

  function handleTotal(value) {
    console.log(value);
    setTotal((cur) => cur + value);
  }

  function handleAddNewItem(newMaterial) {
    setMaterial((currentMaterial) => [...currentMaterial, newMaterial]);
  }

  return (
    <div className="app">
      <Nav /> 
      <Container>
        <Row>
          <Col md={8}>
            <ItemForm
              handleTotal={handleTotal}
              handleAddNewItem={handleAddNewItem}
            />
            <AddedItemsList material={material} />
          </Col>
          <Col>
            <TaxAmounts total={total} />
            {/* <Total total={total} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
