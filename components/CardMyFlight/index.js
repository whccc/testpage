import { Container } from "./styles";

import Button from "react-bootstrap/Button";

export const CardMyFlight = ({
  intIdReserva,
  strOrigen,
  strDestino,
  strPrecio,
  dtFechaReserva,
  strNombre,
  strHora,
  SetModalReserva,
  SetObjDataDelete,
}) => {
  let FechaReserva = dtFechaReserva.split("T")[0].split("-");
  return (
    <Container>
      <h2>{strNombre}</h2>
      <p>
        {strOrigen} {strDestino}
        <small>$ {strPrecio}</small>
        <small>
          Fecha Reserva {FechaReserva[2]}
          {"/"}
          {FechaReserva[1]}
          {"/"}
          {FechaReserva[0]}
        </small>
        <small>Fecha Salida {strHora}</small>
      </p>
      <Button
        variant="danger"
        onClick={() => {
          SetModalReserva(true);
          SetObjDataDelete(intIdReserva);
        }}
      >
        Cancelar
      </Button>
    </Container>
  );
};
