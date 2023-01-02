import React,{ JSXElementConstructor, useState } from "react";
import { GetGifs, ContextProps } from "../../types";

const Context = React.createContext({})

export function GifsContextProvider ({children}: ContextProps) {
    const [gifs, setGifs] = useState<GetGifs["gifs"]>([])

    return <Context.Provider value={{gifs, setGifs}}>
        {children}
    </Context.Provider>
}
export default Context;
