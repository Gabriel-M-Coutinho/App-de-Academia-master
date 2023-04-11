import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "../../contexts/ThemeContext";

function AddUser() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Form className={`formulario ${theme}`}>
        <h4 style={{ textAlign: "start", marginBottom: "20px" }}>
          Adicionar usuario
        </h4>
        <Row>
          <Col style={{ textAlign: "start" }} sm={6}>
            <label> Nome </label>
            <Form.Group className="mb-3" controlId="Nome">
              <Form.Control
                className={`selecionar ${theme}`}
                type="name"
                placeholder="..."
              />
            </Form.Group>
          </Col>
          <Col style={{ textAlign: "start" }} sm={6}>
            <label> Sobrenome </label>
            <Form.Group className="mb-3" controlId="Sobrenome">
              <Form.Control
                className={`selecionar ${theme}`}
                type="name"
                placeholder="..."
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "start" }} sm={4}>
            <label> Idade </label>
            <Form.Group className="mb-3" controlId="Idade">
              <Form.Control
                className={`selecionar ${theme}`}
                type="number"
                placeholder="..."
              />
            </Form.Group>
          </Col>
          <Col style={{ textAlign: "start" }} sm={4}>
            <label> Altura </label>
            <Form.Group className="mb-3" controlId="Altura">
              <Form.Control
                className={`selecionar ${theme}`}
                type="number"
                placeholder="..."
              />
            </Form.Group>
          </Col>
          <Col style={{ textAlign: "start" }} sm={4}>
            <label> Peso </label>
            <Form.Group className="mb-3" controlId="Peso">
              <Form.Control
                className={`selecionar ${theme}`}
                type="number"
                placeholder="..."
              />
            </Form.Group>
          </Col>
        </Row>
        <Col style={{ textAlign: "start" }}>
          <label> Objetivo </label>
          <Form.Group className="mb-3" controlId="Objetivo">
            <Form.Control
              className={`selecionar ${theme}`}
              type="string"
              placeholder="..."
            />
          </Form.Group>
        </Col>
        <hr style={{ opacity: "20%" }} />
        <button type="button" className={`botao success ${theme}`}>
          <FontAwesomeIcon icon={faSquarePlus} size="lg" /> Salvar usuario
        </button>
      </Form>
    </div>
  );
}

export default AddUser;
