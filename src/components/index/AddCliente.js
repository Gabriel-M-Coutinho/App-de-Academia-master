import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "../../contexts/ThemeContext";

function AddCliente() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Form className={`formulario ${theme}`}>
        {/*-------------- TEXTO: DESCRIÇÃO DA PAG ---------------*/}
        <h4 style={{ textAlign: "start", marginBottom: "20px" }}>
          Adicionar usuario
        </h4>
        <Row>
          {/*-------------- FORM: NOME ---------------*/}
          <Col style={{ textAlign: "start" }} sm={6}>
            <label> Nome </label>
            <Form.Group className="mb-3" controlId="Nome">
              <Form.Control
                className={`selecionar ${theme}`}
                type="name"
                placeholder=".."
              />
            </Form.Group>
          </Col>
          {/*-------------- FORM: SOBRENOME ---------------*/}
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
          {/*-------------- FORM: IDADE ---------------*/}
          <Col style={{ textAlign: "start" }} sm={3}>
            <label> Idade </label>
            <Form.Group className="mb-3" controlId="Idade">
              <Form.Control
                className={`selecionar ${theme}`}
                type="number"
                placeholder="..."
              />
            </Form.Group>
          </Col>
          {/*-------------- FORM: ALTURA ---------------*/}
          <Col style={{ textAlign: "start" }} sm={3}>
            <label> Altura </label>
            <Form.Group className="mb-3" controlId="Altura">
              <Form.Control
                className={`selecionar ${theme}`}
                type="number"
                placeholder="..."
              />
            </Form.Group>
          </Col>
          {/*-------------- FORM: PESO INICIAL ---------------*/}
          <Col style={{ textAlign: "start" }} sm={3}>
            <label> Peso inicial </label>
            <Form.Group className="mb-3" controlId="Peso">
              <Form.Control
                className={`selecionar ${theme}`}
                type="number"
                placeholder="..."
              />
            </Form.Group>
          </Col>
          {/*-------------- FORM: PESO FINAL ---------------*/}
          <Col style={{ textAlign: "start" }} sm={3}>
            <label> Peso atual </label>
            <Form.Group className="mb-3" controlId="Peso">
              <Form.Control
                className={`selecionar ${theme}`}
                type="number"
                placeholder="..."
              />
            </Form.Group>
          </Col>
        </Row>
        {/*-------------- FORM: OBJETIVO ---------------*/}
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
        {/*-------------- BOTÃO: SALVAR USUARIO ---------------*/}
        <button type="button" className={`botao success ${theme}`}>
          <FontAwesomeIcon icon={faSquarePlus} size="lg" /> Salvar usuario
        </button>
      </Form>
    </div>
  );
}

export default AddCliente;
