import '../assets/css/Forms.css';

function Modal({ children }) {
    return(
        <div className="fixed inset-0 ModalBody">
            {children}
        </div>
    );
}

export default Modal;