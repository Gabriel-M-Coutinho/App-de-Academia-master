import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-regular-svg-icons";
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
            Welcome to
            <Text className={`itens ${theme}`} b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div>iala</div>
        </Modal.Body>
        <Modal.Footer>
          <div>eae</div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
