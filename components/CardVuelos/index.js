import { Container } from "./styles";
import Button from "react-bootstrap/Button";
export const CardVuelos = () => {
  return (
    <Container>
      <h2>Avianca</h2>
      <p>Medellin - Bogota</p>
      <small>$ 300.000</small>
      <small>Asientos disponibles: 40</small>
      <small>Cancelado</small>
      <Button variant="primary">Reservar</Button>
    </Container>
  );
};
