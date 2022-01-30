import { Card } from "react-bootstrap";

export const Trainer = ({trainer}) =>{
    return(
        <>
            {trainer.name ? (
                <Card style={{margin:"1vh"}}>
                    <Card.Body>
                        <Card.Title>{trainer.name}</Card.Title>
                        <Card.Img src={trainer.img} style={{width:"25vh", height:"30vh"}}/>
                        <Card.Text>Age:{trainer.age}</Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <div className="menu-item-container">
                    <h5 className="center">No se pudo encontrar información de {trainer.name}</h5>
                </div>
            )}
        </>
    )
}