import TabNav from "../components/index/Tabnav";
import { Tab, Row, Col, Container } from "react-bootstrap";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Link from "next/link";

function Erro() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Container>
      <Row className={`fundo ${theme}`}>
        <Col xs={1} style={{ maxWidth: "100px", minWidth: "100px" }}>
          <TabNav />
        </Col>
        <Col className="alinharcentro">
          <Container>
            <Row>
              <h3 style={{ letterSpacing: "7px" }}>ERRO 404</h3>
            </Row>

            <Row>
              <p>Página não encontrada</p>
            </Row>

            <Row>
              <Link href="/">
                <button
                  type="button"
                  className={`botao caixa ${theme} botao-voltar`}
                >
                  Voltar
                </button>
              </Link>
            </Row>
          </Container>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Erro;
