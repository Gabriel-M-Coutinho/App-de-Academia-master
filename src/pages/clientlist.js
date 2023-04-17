import ClienteLista from "../components/index/ClienteLista";
import TabNav from "../components/index/Tabnav";
import { Tab, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export async function getStaticProps(context) {

  const res = await fetch("http://192.168.1.104:5000");
  const clientes = await res.json();

    
  return {
    props: {
      clientes,
    },
    revalidate: 30,
  };
}

function clientlist({ clientes }) {
  const { theme } = useContext(ThemeContext);
  const data = clientes;

  return (
    <Tab.Container>
      <Row className={`fundo ${theme}`}>
        <Col xs={1} style={{ maxWidth: "100px", minWidth: "100px" }}>
          <TabNav at={true} />
        </Col>
        <Col>
          {data &&
            data.map((client, index) => {
              return <ClienteLista name={client.nome} key={index} />;
            })}
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default clientlist;
