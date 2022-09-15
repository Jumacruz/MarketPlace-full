import { useParams } from "react-router";
import { useContext } from "react";
import '../../assets/css/Forms.css';
import { ContextStore } from "../../../services/MemoryStores";
import StoreDetails from "../../new/StoreDetails";

function ModalStore() {
    const {id} = useParams();
    const [state, dispatch] = useContext(ContextStore);
    return(
        <div className="fixed inset-0 ModalBody">
            {JSON.stringify(state.objects[id])}
            <StoreDetails></StoreDetails>
        </div>
    );
}

export default ModalStore;