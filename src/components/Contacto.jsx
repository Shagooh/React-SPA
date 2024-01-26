import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button>Enviar</Button>
    </div>
  );
};
export default Contacto;
