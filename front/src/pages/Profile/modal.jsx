import ReactModal from 'react-modal';

const Modal = ({ isOpen, onClose, url }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <iframe title="Web page" src={url} width="100%" height="100%" frameBorder="0" />
    </ReactModal>
  );
};

export default Modal;