import ThemeButton from "../components/index/ThemeButton";
import { Container, Row, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { setCookie } from "nookies";
import { useRouter } from 'next/router';


function Login() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const [formstate, setformstate] = useState({});
  const [statuserrormsg, setstatuserrormsg] = useState(false);
  const [errormsg,seterrormsg]  = useState('');

  const handleChange = (event) => {
    setformstate({
      ...formstate,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o envio do formulário

    try{
      //pesquisar no banco
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formstate),
      });
      //trasformar em json a response
      const json = await res.json()

      
      //verificação da response
      if(json.status == 401 ){
        setstatuserrormsg(true)
        seterrormsg({msg:json.message,status:json.message})
      }if(json.status == 200){
        setCookie(null,'Token',json.token,{  sameSite: 'none',
        secure: true
          })
        router.push('/')
        
      }
     

    }catch(err){
      setstatuserrormsg(true)
      seterrormsg('erro no servidor')
    }
      


      

  
  
  }

  return (
    <Container
      className={`alinharcentro fundo login ${theme}`}
      style={{ margin: "0px" }}
    >
      <Row style={{ width: "50%", maxWidth: "500px" }}>
        <Form
          onSubmit={handleSubmit}
          noValidate
          style={{ padding: "10%" }}
          className={`formulario ${theme}`}
        >
          <h4 style={{ marginBottom: "20px" }}>Login</h4>
          <div style={{ textAlign: "start", marginLeft: "10px" }}> Email </div>
          <Form.Group controlId="email">
            <Form.Control
              onChange={handleChange}
              className={`selecionar ${theme}`}
              type="email"
              placeholder="seuemail@email.com"
              required
              value={formstate.email || ""}
            />
          </Form.Group>
          <div style={{ textAlign: "start", marginLeft: "10px" }}> Senha </div>
          <Form.Group controlId="password">
            <Form.Control
              onChange={handleChange}
              className={`selecionar ${theme}`}
              type="password"
              placeholder="*********"
              required
              value={formstate.senha}
            />
          </Form.Group>

          <button type="submit" className={`botao ${theme}`}>
            entrar
          </button>

          <p className="linkrecuperar">Recuperar senha</p>
        </Form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ThemeButton />
        </div>
      </Row>
    </Container>
  );
}

export default Login;
