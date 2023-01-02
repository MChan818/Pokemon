import React, {useEffect, useState} from "react";
import './Item.css'
import axios from "axios";
import { Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Pokemon = ({ pokemon }) => {
    const [pokeInfo, setPokeInfo] = useState({});

    const capitalize = (s) => { //Mayuscula en la primera letra
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    useEffect(() => {
        const fetchData = async (url) => {
            const result = await axios(url);
            setPokeInfo(result.data);
        };

        if(pokemon.url){
           fetchData(pokemon.url);
        } 
    }, [pokemon]);

    return (
        <>
            { pokeInfo.name ? (
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title className="center">
                        {capitalize(pokeInfo.name)}
                    </Card.Title>
                    <Card.Img src={pokeInfo.sprites.other['official-artwork'].front_default}/>
                    <Card.Text>Pokedex ID: {pokeInfo.id}</Card.Text>
                    <NavLink to={`/pokedex/${pokeInfo.id}`}>
                        <button className="btn btn-primary">
                            Detalles
                        </button>
                    </NavLink>
                </Card.Body>
            </Card>
            ) : ( 
                <div className="menu-item-container">
                    <h5 className="center">No se pudo encontrar información de {pokemon.name}</h5>
                </div>
            )
            }
        </>

    );

}

export default Pokemon;