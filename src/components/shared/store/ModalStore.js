import { useParams } from "react-router";
import { useContext } from "react";
import '../../assets/css/Forms.css';
import { ContextProducts } from "../../../services/MemoryProducts";
import ProductDetails from "../../new/ProductDetails";

function ModalStore() {
    const {id} = useParams();
    const [state, dispatch] = useContext(ContextProducts);
    return(
        <div className="fixed inset-0 ModalBody">
            {JSON.stringify(state.objects[id])}
            <ProductDetails></ProductDetails>
        </div>
    );
}

export default ModalStore;