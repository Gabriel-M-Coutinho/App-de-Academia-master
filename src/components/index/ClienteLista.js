import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "../../contexts/ThemeContext";

function UserList({name}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Row className={`formulario client ${theme}`}>
        <Col>
          <p className="info">
            <strong>Nome: {name}</strong>
          </p>
        </Col>
        <Col xs={4}>
          <p className="info">
            <strong>Ficha:</strong>
          </p>
        </Col>
        <Col xs={1} style={{ textAlign: "end" }}>
          <p className="info seta">
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default UserList;
