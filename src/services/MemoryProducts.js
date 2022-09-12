import { createContext, useReducer } from "react";
import landscape from '../components/assets/img/landscape.jpg';

const MetaProductsList = [
    {
        "id":"1",
        "name": "painting",
        "category":"Hogar",
        "currency":"Q",
        "PriceLabeled":"499.00",
        "PriceNormal":"299.00",
        "img":landscape,
        "url": "#",
        "CategoryUrl":"#"
    },
    {
        "id":"2",
        "name": "Camisa",
        "category":"Ropa",
        "currency":"$",
        "PriceLabeled":"20.00",
        "PriceNormal":"15.00",
        "img":landscape,
        "url": "#",
        "CategoryUrl":"#"
    },
    {
        "id":"3",
        "name": "silla",
        "category":"Hogar",
        "currency":"Q",
        "PriceLabeled":"300.00",
        "PriceNormal":"295.00",
        "img":landscape,
        "url": "#",
        "CategoryUrl":"#"
    }
];

const InitialState = {
    order: [],
    objects: {}
};

function reductor(state, action) {
    switch (action.type) {
        case 'place': {
            const items = action.items;
            const newState = {
                order: items.map(item => item.id),
                objects: items.reduce((object, item) => ({...object, [item.id]: item}), {})
            };
            return newState;
        };
        case 'create': {
            const id = Math.random(); //action.item.id;
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.item
                }
            };
            return newState;
        };
    }
}
const MetaList = reductor(InitialState, {type: 'place', items: MetaProductsList});

export const ContextProducts = createContext(null);

function MemoryProducts({children}) {
    const [state, dispatch] = useReducer(reductor, MetaList);
    return ( 
        <ContextProducts.Provider value={[state, dispatch]}>
            {children}
        </ContextProducts.Provider>
     );
}

export default MemoryProducts;