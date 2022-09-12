import Stores from "./Stores";
import { useContext } from "react";
import { ContextStore } from "../../../services/MemoryStores";

function StoreList() {
    const [state, dispatch] = useContext(ContextStore);
    return ( 
        state.order.map(id=> <Stores key={id} {...state.objects[id]}></Stores>)
     );
}

export default StoreList;