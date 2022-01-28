import React, {useEffect, useState} from "react";
import './Item.css'
import axios from "axios";
import { Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Pokemon = ({ pokemon }) => {
    console.log(pokemon)
    const [pokeInfo, setPokeInfo] = useState({});

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
                    <Card.Title className="text-uppercase">
                        {pokeInfo.name}
                    </Card.Title>
                    <Card.Img src={pokeInfo.sprites.front_default} />
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