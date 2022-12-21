import React, { createContext } from "react";

export const appContext = createContext(null);

export function MainContext({ children }) {

   

    // values to be shared across the context
    var contextValues = {
        usingContex: false
    };

    return (
        <appContext.Provider value={contextValues}>
            {children}
        </appContext.Provider>
    );
}
