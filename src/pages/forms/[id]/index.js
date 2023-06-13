import AddForm from "../../../components/index/Addform";
import TabNav from "../../../components/index/Tabnav";
import { Tab, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import { useRouter } from 'next/router'


export const getStaticPaths = async ()=>{
  const res = await fetch("http://localhost:4000/ficha")
  const clients = await res.json()

  const paths = clients.map((client) => ({
    params: { id: client._id.toString() }, // Certifique-se de converter o ID para string
  }));
  
  return{
    paths,
    fallback: false
  }

}

export const getStaticProps = async ({params}) =>{
  const res = await fetch(`http://localhost:4000/ficha/${params.id}`)
  const data = await res.json()
  return{
      props:data
    
  }
  }
  



function Forms() {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const {id} = router.query;

  return (
    <Tab.Container id="tabid">
      <Row className={`fundo ${theme}`}>
        <Col xs={1} style={{ maxWidth: "100px", minWidth: "100px" }}>
          <TabNav />
        </Col>
        <Col>
          <AddForm eventKey="Form" client_id={id} />
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Forms;
