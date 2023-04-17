import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-regular-svg-icons";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Text, Tooltip, Button } from "@nextui-org/react";
import ThemeContext from "../../contexts/ThemeContext";

export default function SaveformName() {
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Tooltip
        contentColor="primary"
        color="default"
        content={"Salvar modelo"}
        placement="bottom"
      >
        <Button
          auto
          type="button"
          variant="outline-secondary"
          className={`botao ${theme}`}
          onPress={handler}
        >
          <FontAwesomeIcon icon={faPaste} size="lg" />
        </Button>
      </Tooltip>

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className={`formulario ${theme}`}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} className={`itens ${theme}`}>
            Salve como <strong>modelo</strong>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <label> Nome: </label>
          <Form.Group className="mb-3" controlId="Nome">
            <Form.Control
              className={`selecionar ${theme}`}
              type="name"
              placeholder="..."
            />
            <Text id="modal-title" size={12} className={`itens ${theme}`}>
              Nomeie a ficha para que possa encontra-la depois
            </Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <hr style={{ opacity: "20%" }} />
          <button type="button" className={`botao success ${theme}`}>
            Salvar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
