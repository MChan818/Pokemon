import React, {useEffect, useState} from "react";
import PokeList from "../PokeList/PokeList";

const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=10"
// const apiURL = "https://pokeapi.co/api/v2/pokemon/1/"

//EJEMPLO JSON:
// "results": [
//     {
//         "name": "bulbasaur",
//         "url": "https://pokeapi.co/api/v2/pokemon/1/"
//       },

export function PokeContainer(){
    //LLAMAMOS PARA EL PARAMETRO "NAME"
    const [pokemons, setPoke] = useState([]);
    useEffect(() =>{
        const call = fetch(apiURL);
        call.then(result => result.json())
        .then(data=> setPoke(data.results))
    }, []);

    // const [newdata, setData] = useState([]);
    // useEffect(() =>{
    //     fetch(pokemons.url)
    //     .then(resultado => resultado.json())
    //     .then(resultadoJSON => setData(resultadoJSON))
    // }, []);
    return(
        <>
            <PokeList pokemons = {pokemons}/>
            {/* Aca iria "newdata" en vez de "pokemons" */}
        </>
    );
};

export default PokeContainer;