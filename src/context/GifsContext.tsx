import React,{ ReactNode, useState } from "react";
import { GetGifs } from "../../types";

const Context = React.createContext({})

export function GifsContextProvider ({children}) {
    const [gifs, setGifs] = useState<GetGifs["gifs"]>([])

    return <Context.Provider value={{gifs, setGifs}}>
        {children}
    </Context.Provider>
}
export default Context;
