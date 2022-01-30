import React, { useEffect ,useState} from "react";
import { getFirestore } from "../../firebase";
import TrainerList from "../TrainerList/TrainerList";
import { Container } from "react-bootstrap";

export const TrainerContainer = () =>{

    const [trainers, setTrainers] = useState([]);

    useEffect(() =>{

        const database = getFirestore();
        const trainerCollection = database.collection("trainers");
        trainerCollection.get().then((data) => {
            if(data.size === 0){
                console.log("No results")
            }
            setTrainers(data.docs.map(res => res.data()))
        }).catch((error) =>{
            console.log("Error", error);
        }).finally(() =>{
            console.log("Success");
        })

    },[])

    return (
        <>
            <Container>
                <h2>Entrenadores</h2>
                <p>Todos los datos de esta seccion se levantan utilizando <strong>FIREBASE</strong></p>
            </Container>
            <Container>
                <TrainerList trainers = {trainers}/>
            </Container>
        </>

    );
}