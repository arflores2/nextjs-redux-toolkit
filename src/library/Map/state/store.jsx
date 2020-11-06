import React, { createContext, useReducer } from "react";
import { defaultState, mapReducer } from './reducers';

export const Store = ({children}) => {
    const [state, dispatch] = useReducer(mapReducer, defaultState);
    return (
        <Context.Provider value={[ state, dispatch ]}>
            {children}
        </Context.Provider>
    )
};
export const Context = createContext(defaultState);