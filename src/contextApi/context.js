import { createContext,useState } from "react";


export const gloabldata= createContext();

function ConetxtProvider({children}){

    const [text,setText]=useState(" ")
    const [querry,setQuerry]=useState("chicken")
    const [listofingridients,setListofingridients]=useState("chicken")

    return <gloabldata.Provider value={{text,setText,querry,setQuerry,listofingridients,setListofingridients}}>
        {children}
    </gloabldata.Provider>
}

export default ConetxtProvider;