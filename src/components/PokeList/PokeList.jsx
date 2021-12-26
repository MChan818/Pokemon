import Pokemon from "../Pokemon/Pokemon";
import { Col, Row } from 'react-bootstrap';


export function PokeList ({pokemons}){
    return(
        <Row>
            {pokemons.length && pokemons.map((pokemon, index)=>(
                <Col sm="4" md="4" lg="4" key={`${index}Pokemon`}>
                    <Pokemon pokemon={pokemon}/>
                </Col>
            ))}
        </Row>
    )
}

export default PokeList;