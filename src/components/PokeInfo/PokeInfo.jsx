import React from "react";
import axios from "axios";
import './PokeInfo.css'

const PokeInfoD = ({ pokemon }) => {
    const [pokeInfoD, setPokeInfoD] = React.useState([]);
    const [pokeDescription, setPokeDescription] = React.useState()

    React.useEffect(() => {
        const fetchData = async (url) => {
            await axios.get(url).then(res=>{
                if(res){
                    axios.get(res.data.species.url).then(res=>{
                        setPokeDescription(res.data.flavor_text_entries[0].flavor_text)
                    })
                    return setPokeInfoD(res.data);
                }
            }).catch(e=>{
                console.log(e)
                return alert(e);
            })
        };
        
        if(pokemon.url){
            fetchData(pokemon.url);
        }
    },[pokemon]);

    return (
        <>
        {pokeInfoD.name ? (
            <>
                <section className="pokemon-container">
                    <div className="pokemon-card-container">
                        <div className="pokemon-header-container">

                            <div className="pokemon-header1">
                                <div className="pokemon-image-container">
                                    <img src={pokeInfoD.sprites.other['official-artwork'].front_default} alt="Pokemon_front_sprite" className="PokeImg"/>
                                </div>

                                <h2 className="center text-uppercase">{pokeInfoD.name}</h2>
                            </div>

                            <div className="pokemon-header2">
                                <div className="PokeSubtitle">
                                    <strong>Pokedex ID:</strong>
                                    <p>{pokeInfoD.id}</p>
                                </div>
                                <div className="PokeSubtitle">
                                    <strong>Ability:</strong>
                                    {pokeInfoD.abilities.map(e=>{
                                        return(<p className="text-uppercase">{e.ability.name}</p>)
                                    })}
                                </div>
                                <div className="PokeSubtitle">
                                    <strong>Height:</strong>
                                    <p>{pokeInfoD.height / 10}m</p>
                                    <strong>Weight:</strong>
                                    <p>{pokeInfoD.weight/10}kg</p>
                                </div>
                                <div className="PokeSubtitle">
                                    <strong>Types:</strong>
                                    {pokeInfoD.types.map(e=>{
                                        return(<p className="text-uppercase">{e.type.name}</p>)
                                    })}
                                </div>
                            </div>

                        </div>
                        
                        <div className="pokemon-main-container">
                            <div className="pokemon-description">
                                <p className="text-uppercase">
                                    {pokeDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        ):(
            <div className="center">
                <h2 className="center">Cargando...</h2>
            </div>
        )}
        </>

    );

}

export default PokeInfoD;