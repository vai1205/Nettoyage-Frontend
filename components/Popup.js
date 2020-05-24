import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useState} from 'react';
import {FiArrowRight} from 'react-icons/fi';
const Popup = props => {
  const { title, body, popupOpener, close, popupOpenerClass, showArrow, arrowClass } = props;
  const [modal, setModal] = useState(!!props.isOpenByDefault);
  const toggle = () => setModal(!modal);
  return (
    <div style={{position:"relative"}}>
      <p className={popupOpenerClass} onClick={toggle}>
        {popupOpener}
        {
          showArrow && <FiArrowRight className={arrowClass}/>
        }
      </p>
      <Modal style={{color:"black"}} isOpen={modal} modalTransition={{ timeout: 100 }} backdropTransition={{ timeout: 200 }}
        toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {body}
        </ModalBody>
        <ModalFooter>
          <Button outline color="danger" onClick={toggle}>{close}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Popup;