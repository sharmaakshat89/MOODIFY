import { useState } from "react";
import { createContext } from "react";

export const SongContext= createContext()

export const SongContextProvider=({children}) => {

    const [song,setSong]= useState({

    })

    return (
        <SongContext.Provider value={{loading,setLoading,setSong,song}}>
            {children}
        </SongContext.Provider>
    )


}