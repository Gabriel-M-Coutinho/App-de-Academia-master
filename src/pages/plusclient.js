import TabNav from "../components/index/Tabnav";
import { Tab, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import AddCliente from "../components/index/AddCliente";

function plusclient() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Container>
      <Row className={`fundo ${theme}`}>
        <Col xs={1} style={{ maxWidth: "100px", minWidth: "100px" }}>
          <TabNav at={true} />
        </Col>
        <Col>
          <AddCliente />
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default plusclient;
