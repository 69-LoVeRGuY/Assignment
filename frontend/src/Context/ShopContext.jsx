import React, {useState, useEffect, useContext, createContext, Children} from 'react'
import { Data } from './Data';

const ShopContext = createContext(null);

export const useData = () => {
    const context = useContext(ShopContext);
    return context;
};

export const ShopProvider = ({children}) => {

    const contextValue = Data();

    return(
        <ShopContext.Provider value={{contextValue}} >
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContext;