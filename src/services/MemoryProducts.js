import { createContext, useReducer } from "react";
import landscape from '../components/assets/img/landscape.jpg';

// const MetaProductsList = [
//     {
//         "id":"1",
//         "name": "painting",
//         "category":"Hogar",
//         "currency":"Q",
//         "PriceLabeled":"499.00",
//         "PriceNormal":"299.00",
//         "img":landscape,
//         "url": "#",
//         "CategoryUrl":"#"
//     },
//     {
//         "id":"2",
//         "name": "Camisa",
//         "category":"Ropa",
//         "currency":"$",
//         "PriceLabeled":"20.00",
//         "PriceNormal":"15.00",
//         "img":landscape,
//         "url": "#",
//         "CategoryUrl":"#"
//     },
//     {
//         "id":"3",
//         "name": "silla",
//         "category":"Hogar",
//         "currency":"Q",
//         "PriceLabeled":"300.00",
//         "PriceNormal":"295.00",
//         "img":landscape,
//         "url": "#",
//         "CategoryUrl":"#"
//     }
// ];

// const InitialState = {
//     order: [],
//     objects: {}
// };

const memory = localStorage.getItem('items')
const InitialState = memory
    ? JSON.parse(memory)
    : {
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
            localStorage.setItem('items', JSON.stringify(newState))
            return newState;
        };
        case 'create': {
            const id = String(Math.random()); //action.item.id;
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.item
                }
            };
            localStorage.setItem('items', JSON.stringify(newState))
            return newState;
        };
        case 'update': {
            const id = action.item.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.item
            };
            const newState = { ...state };
            localStorage.setItem('items', JSON.stringify(newState))
            return newState;
        };
        case 'erase': {
            const id = action.id;
            const newOrder = state.order.filter(item => item !== id);
            delete state.objects[id];
            const newState = { 
                order: newOrder,
                objects: state.objects
            };
            localStorage.setItem('items', JSON.stringify(newState))
            return newState;
        };
        default:
            throw new Error();
    }
}

// const MetaList = reductor(InitialState, {type: 'place', items: MetaProductsList});
// reductor(InitialState, {type: 'place', items: MetaProductsList});

export const ContextProducts = createContext(null);

function MemoryProducts({children}) {
    const [state, dispatch] = useReducer(reductor, InitialState);
    return ( 
        <ContextProducts.Provider value={[state, dispatch]}>
            {children}
        </ContextProducts.Provider>
     );
}

export default MemoryProducts;