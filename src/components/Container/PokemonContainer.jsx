import React, {useEffect, useState} from "react";
import PokeList from "../PokeList/PokeList";
import axios from 'axios';
import { Container } from 'react-bootstrap';


export function PokeContainer(){
    const [pokemons, setPoke] = useState([]);
    const [contador, setContador] = useState(1);

    const morePokemons = () => {
        setContador(prev => prev + 1)
        console.log(contador);
    }
    const fetchData = async () => {
        let result =  await axios(`https://pokeapi.co/api/v2/pokemon?limit=${10 * contador}`);
        setPoke(result.data.results);
    };

    useEffect(() => {
        fetchData();
    }, [contador]);

    return(
        <>
        <Container>
            <h2>Pokémones</h2>
            <p>Todos los datos de esta seccion se levantan utilizando una <strong>API</strong></p>
            <p>Link: https://pokeapi.co/</p>
        </Container>
        <Container>
            <PokeList pokemons = {pokemons}/>
             <button onClick={morePokemons} className="btn btn-primary">Más Pokemones</button>
        </Container>
        </>
    );
};

export default PokeContainer;