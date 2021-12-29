import React, {useEffect, useState} from "react";
import PokeInfoD from "../PokeInfo/PokeInfo";
import axios from 'axios';
import { useParams } from "react-router-dom";

const PokeInfoContainer = () =>{
    const [pokecontainer, setPokeContainer] = useState([]);

    const {PokeID} = useParams();

    const fetchData = async () => {
        let result =  await axios(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${PokeID - 1}`);
        setPokeContainer(result.data.results[0]);
    };
    
    useEffect(() => {
        fetchData();
    },[]);
    return(
        <>
            <PokeInfoD pokemon={pokecontainer}/>
        </>
    );
};

export default PokeInfoContainer;
