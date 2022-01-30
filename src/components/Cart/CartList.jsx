import { Col, Row } from 'react-bootstrap';
import { Cart } from './Cart';


export function CartList ({pokemons}){
    return(
        <Row>
            {pokemons.length && pokemons.map((pokemon, index)=>(
                <Col key={`${index}Pokemon`}>
                    <Cart pokemon={pokemon}/>
                </Col>
            ))}
        </Row>
    )
}

export default CartList;