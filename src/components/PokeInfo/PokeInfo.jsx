import React, {useEffect, useState} from "react";
import axios from "axios";
import './PokeInfo.css'
import { PokeDetail } from "../PokeCount/PokeCount";

const PokeInfoD = ({ pokemon }) => {
    const [pokeInfoD, setPokeInfoD] = useState([]);

    useEffect(() => {
        const fetchData = async (url) => {
            const result = await axios(url);
            setPokeInfoD(result.data);
        };
        
        if(pokemon.url){
            fetchData(pokemon.url);
        }
    },[pokemon]);

    return (
        <>
        {pokeInfoD.name ? (
            <section className="PokeContainer">
                <h1 className="center text-uppercase">{pokeInfoD.name}</h1>
                    <div className="PokeInfoLeft">
                        <img src={pokeInfoD.sprites.front_default} alt="Pokemon_front_sprite" className="PokeImg"/>
                        <p className="PokeSubtitle"><strong>Type:</strong> {pokeInfoD.types[0].type.name}</p>
                    </div>

                    <div className="PokeInfoRight">
                        <div className="PokeInfoContainer">
                            <p className="PokeSubtitle"><strong>Name:</strong> {pokeInfoD.name}</p>
                            <p className="PokeSubtitle"><strong>Pokedex ID:</strong> {pokeInfoD.id}</p>
                            <p className="PokeSubtitle"><strong>Ability:</strong> {pokeInfoD.abilities[0].ability.name}</p>
                            <p className="PokeSubtitle"><strong>Height:</strong> {pokeInfoD.height / 10}m</p>
                            <p className="PokeSubtitle"><strong>Weight:</strong> {pokeInfoD.weight}kg</p>
                        </div>
                    </div>
                    <PokeDetail pokemon = {pokeInfoD}></PokeDetail>
            </section>
        ):(
            <div className="center">
                <h2 className="center">Cargando...</h2>
            </div>
        )}
        </>

    );

}

export default PokeInfoD;