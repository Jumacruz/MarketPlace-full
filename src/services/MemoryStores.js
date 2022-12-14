import { createContext, useReducer } from "react";
import landscape from '../components/assets/img/landscape.jpg';

const MetaStoresList = [
    {
        "id":"1",
        "name": "TiendasDeSanJose",
        "category":"Ropa",
        "views":2,
        "img":landscape,
        "url": "#",
        "CategoryUrl":"#"
    },
    {
        "id":"2",
        "name": "Walmart",
        "category":"Salud",
        "views":40,
        "img":landscape,
        "url": "#",
        "CategoryUrl":"#"
    },
    {
        "id":"3",
        "name": "Mcdonals",
        "category":"Comida",
        "views":25,
        "img":landscape,
        "url": "#",
        "CategoryUrl":"#"
    }
];

const InitialState = {
        order: [],
        objects: {}
    };
// const memory = localStorage.getItem('items')
// const InitialState = memory
//     ? JSON.parse(memory)
//     : {
//         order: [],
//         objects: {}
//     };

function reductor(state, action) {
    switch (action.type) {
        case 'place': {
            const items = action.items;
            const newState = {
                order: items.map(item => item.id),
                objects: items.reduce((object, item) => ({...object, [item.id]: item}), {})
            };
            // localStorage.setItem('items', JSON.stringify(newState))
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
            // localStorage.setItem('items', JSON.stringify(newState))
            return newState;
        };
        case 'update': {
            const id = action.item.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.item
            };
            const newState = { ...state };
            // localStorage.setItem('items', JSON.stringify(newState))
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
            // localStorage.setItem('items', JSON.stringify(newState))
            return newState;
        };
        default:
            throw new Error();
    }
}

const MetaList = reductor(InitialState, {type: 'place', items: MetaStoresList});
// reductor(InitialState, {type: 'place', items: MetaStoresList});

export const ContextStore = createContext(null);

function MemoryStore({children}) {
    const [state, dispatch] = useReducer(reductor, MetaList);
    return ( 
        <ContextStore.Provider value={[state, dispatch]}>
            {children}
        </ContextStore.Provider>
     );
}

export default MemoryStore;