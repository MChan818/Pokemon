import React, { useEffect ,useState} from "react";
import { getFirestore } from "../../firebase";
import { createContext } from "react";

export const PokeballContext = createContext();

export const PokeballProvider = ({children}) =>{
    const [pokeballs, setPokeballs] = useState([]);
    const [PokeballID, setPokeballID] = useState([]);

    useEffect(() =>{

        const database = getFirestore();
        const pokeballsCollection = database.collection("pokeballs");
        pokeballsCollection.get().then((data) => {
            if(data.size === 0){
                console.log("No results")
            }
            setPokeballs(data.docs.map(res => res.data()))
            setPokeballID(data.docs.map(res => res.id))
        }).catch((error) =>{
            console.log("Error", error);
        }).finally(() =>{
            console.log("Success");
        })
    },[])
    
    return(
        <>
            <PokeballContext.Provider value={{pokeballs, PokeballID}}>
                {children}
            </PokeballContext.Provider>
        </>
    );
}