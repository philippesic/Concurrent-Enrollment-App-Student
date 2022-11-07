import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export function ButtonModal({title, children, label, ...props}) {
  const [show, setShow] = useState(false);

  return (  
    <>
      <Button {...props} onClick={() => setShow(true)}>
        {label}
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        {title &&
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        }
        {children}
      </Modal>
    </>
  );
}

export default ButtonModal;