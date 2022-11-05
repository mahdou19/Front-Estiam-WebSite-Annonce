import React, {createContext} from 'react'

export const useContext = createContext()


export const DataProvider = ({children}) =>{

    return (
        <useContext.Provider value={"Value Global"}>
            {children}
        </useContext.Provider>
    )
}