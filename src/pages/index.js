import AddForm from "../components/index/Addform";
import TabNav from "../components/index/Tabnav";
import { Tab, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Container>
      <Row className={`fundo ${theme}`}>
        <Col xs={1} style={{ maxWidth: "100px", minWidth: "100px" }}>
          <TabNav />
        </Col>
        <Col>
          <AddForm eventKey="Form" />
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default App;
