import React from 'react';
import { createContext, useReducer } from "react";

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
    const reducerFn = (state, action) => {
        switch (action.type) {
            case "SET_LINK":
                return {
                    ...state,
                    selectedLink: action.payload
                }
            case "TOGGLE_LINK":
                return {
                    ...state,
                    openLink: action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducerFn, {
        selectedLink: "",
        openLink: false
    });

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}