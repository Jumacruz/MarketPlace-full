import Stores from "./Stores";
import { useContext } from "react";
import { ContextStore } from "../../../services/MemoryStores";
import { Outlet } from "react-router";

function StoreList() {
    const [state, dispatch] = useContext(ContextStore);
    return ( 
        <>
            {state.order.map(id=> <Stores key={id} {...state.objects[id]}></Stores>)}
            <Outlet/>
        </> 
     );
}

export default StoreList;