import { Trainer } from '../Trainer/Trainer';
import { Col, Row } from 'react-bootstrap';


export function TrainerList ({trainers}){
    return(
        <Row>
            {trainers.length && trainers.map((trainer, index)=>(
                <Col sm="4" md="4" lg="4" key={`${index}Trainer`}>
                    <Trainer trainer={trainer}/>
                </Col>
            ))}
        </Row>
    )
}

export default TrainerList;