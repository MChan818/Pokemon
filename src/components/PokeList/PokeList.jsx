import Pokemon from "../Pokemon/Pokemon";

export function PokeList ({pokemons}){
    return(
        <>
            {pokemons.map((pokemon)=>(
                <Pokemon pokemon={pokemon}/>
            ))}
        </>
    )
}

export default PokeList;