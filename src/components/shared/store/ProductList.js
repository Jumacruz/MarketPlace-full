import Products from "./Products";
import { useContext } from "react";
import { ContextProducts } from "../../../services/MemoryProducts";

function ProductsList() {
    const [state, dispatch] = useContext(ContextProducts);
    return ( 
        state.order.map(id=> <Products key={id} {...state.objects[id]}></Products>)
     );
}

export default ProductsList;