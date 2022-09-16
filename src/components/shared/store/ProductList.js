import Products from "./Products";
import { useContext, useEffect } from "react";
import { ContextProducts } from "../../../services/MemoryProducts";
import { Outlet } from "react-router";
import { OrderProducts } from "../../../services/OrderProducts";

function ProductsList() {

    const [state, dispatch] = useContext(ContextProducts);

    useEffect(() => {
        const items = OrderProducts();
        dispatch({ type: 'place', items });
    },[]);

    
    return ( 
        <>
            {state.order.map(id=> <Products key={id} {...state.objects[id]}></Products>)}
            <Outlet/>
        </>
     );
}

export default ProductsList;