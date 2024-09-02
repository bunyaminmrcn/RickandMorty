import React, { createContext, useContext, useEffect, useState } from 'react';
import { ColorsDark, ColorsLight } from '../utils/colors';

interface State {
    bottomSheet: {
        index: number;
        flex: number;
    }
}

let initial: State = {
    bottomSheet: {
        index: -1,
        flex: 0
    }
};


const StateContext = createContext({
    store: initial,
    setStorePartial : (state: any) => {}
});

function StoreProvider({ children }: any) {
    const [store, setStore] = useState(initial);
     

    

    return (
        <StateContext.Provider
            value={{
                store,
                setStorePartial: setStore
            }}>
            {children}
        </StateContext.Provider>
    );
}

const useStateHook = () => useContext(StateContext);

export { StoreProvider, useStateHook };
