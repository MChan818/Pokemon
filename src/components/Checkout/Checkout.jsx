import {Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { useState, useContext} from "react";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import { getFirestore } from "../../firebase";
import './Checkout.css'

const Checkout = () =>{
    const {PokeCart, TotalPrice, EmptyCart} = useContext(PokeCartContext);
    const [validated, setValidated] = useState(false);
    const [mail, setMail] = useState();
    const [mail2, setMail2] = useState();
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [num, setNum] = useState();
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.history.push('/complete');
    // }
    
    const auth = () =>{
        if(mail !== mail2){
            alert('Los emails no coinciden');
            return false;
        }
        if((name && lastname && num && mail && mail2) === ""){
            alert('Debe rellenar todos los campos')
            return false;
        }
        else
        console.log("Success")
        return true;
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(auth() === false){
            event.preventDefault();
            event.stopPropagation();
            return setValidated(true);
        }
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          return setValidated(true);
        } else{
            event.preventDefault();
            let orden = {
                buyer: {Name:name, LastName:lastname, Mail: mail, phone: num},
                items: {PokeCart},
                total: {TotalPrice},
            };
            const db = getFirestore();
            const orders = db.collection("orders");

            orders.add(orden).then(({id}) =>{
                // window.location.replace(`/complete/${id}`); //GITHUB PAGES DOESN'T SUPPORT DINAMYC ROUTES
                alert(`GITHUB PAGES DOESN'T SUPPORT DYNAMIC ROUTES. ORDER ID IS ${id}`)
                return EmptyCart();
            }).catch((error)=>{
                return console.log("Error", error);
            }).finally(()=>{
                return console.log("La compra se realizo con exito")
            });
        }
      };
    
    return(
        <section className="form-container">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">

                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            onChange={(e)=>{setLastname(e.target.value)}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row>
                    <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e)=>{setMail(e.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                            Please enter valid email
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                </Row>

                <Row>
                    <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                        <Form.Label>Verify Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                            type="email"
                            placeholder="Email2"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e)=>{setMail2(e.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                            Email is not the same
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row>
                <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                        <Form.Label>Phone number</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">+54 9</InputGroup.Text>
                            <Form.Control
                            type="text"
                            placeholder="Phone Number"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e)=>{setNum(e.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                            Please use a valid Phone Number
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </section>
    );
}

export default Checkout;

{/* <Form>
<Form.Group className="mb-3">
    <Form.Label>Nombre:</Form.Label>
    <Form.Control type="text" placeholder="Ingrese su Nombre" onChange={e=>setName(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Apellido</Form.Label>
    <Form.Control type="text" placeholder="Ingrese su Apellido" onChange={e=>setLastname(e.target.value)} className="test"/>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Teléfono</Form.Label>
    <Form.Control type="tel" placeholder="Ingrese su Numero de telefono" onChange={e=>setNum(e.target.value)}/>
    <Form.Text className="text-muted">
    En caso de celular, omitir el número de área
    </Form.Text>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Ingrese su Email" onChange={e=>setMail(e.target.value)}/>
    <Form.Text className="text-muted">
    Nunca revelaremos su direccion a terceros
    </Form.Text>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Reingrese su Email" onChange={e=>setMail2(e.target.value)}/>
    <Form.Text className="text-muted">
    Ingrese de nuevo su dirección de correo
    </Form.Text>
</Form.Group>
<Button variant="primary" onClick={()=>{handleSubmit()}}>
    Terminar mi compra
</Button>
</Form> */}