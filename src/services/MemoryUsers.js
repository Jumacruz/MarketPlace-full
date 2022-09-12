import { createContext, useReducer } from "react";

const MetaUsersList = [
    {
        "id":"1",
        "UserName":"Oscar",
        "password":"",
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
const MetaList = reductor(InitialState, {type: 'place', items: MetaUsersList});

export const ContextUsers = createContext(null);

function MemoryUsers({children}) {
    const [state, dispatch] = useReducer(reductor, MetaList);
    return ( 
        <ContextUsers.Provider value={[state, dispatch]}>
            {children}
        </ContextUsers.Provider>
     );
}

export default MemoryUsers;