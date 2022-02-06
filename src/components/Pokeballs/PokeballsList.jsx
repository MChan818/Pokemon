import { Pokeball } from './Pokeballs';
import { Col, Row } from 'react-bootstrap';


export function PokeballList ({pokeballs}){
    return(
        <Row>
            {pokeballs.length && pokeballs.map((pokeball, index)=>(
                <Col sm="4" md="4" lg="4" key={`${index}Pokeballs`}>
                    <Pokeball pokeball={pokeball}/>
                </Col>
            ))}
        </Row>
    )
}

export default PokeballList;