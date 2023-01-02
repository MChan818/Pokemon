import { Col } from 'react-bootstrap';
import { Cart } from './Cart';


function CartList ({pokemons}){
    return(
        <Col>
            {pokemons.length && pokemons.map((pokemon, index)=>(
                <Col key={`${index}Pokemon`}>
                    <Cart pokemon={pokemon}/>
                </Col>
            ))}
        </Col>
    )
}

export default CartList;