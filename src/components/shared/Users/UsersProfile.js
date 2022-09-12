import Users from "./Users";
import { useContext } from "react";
import { ContextUsers } from "../../../services/MemoryUsers";

function UsersList() {
    const [state, dispatch] = useContext(ContextUsers);
    return ( 
        state.order.map(id=> <Users key={id} {...state.objects[id]}></Users>)
     );
}

export default UsersList;