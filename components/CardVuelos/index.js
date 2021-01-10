import { Container } from "./styles";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
export const CardVuelos = ({
  intId,
  strNombre,
  strOrigen,
  strDestino,
  strPrecio,
  N_Asientos,
  intEstado,
  strHora,
  TypeSearch,
  SetModalReserva,
  DataReserva,
}) => {
  const Type = (TypeSearch) => {
    if (TypeSearch == 3) {
      return (
        <>
          <small>Asientos: {N_Asientos}</small>
          <small>
            {intEstado == 1 ? (
              <h6>
                <Badge variant="primary">Disponible</Badge>
              </h6>
            ) : (
              <h6>
                <Badge variant="danger">Cancelado</Badge>
              </h6>
            )}
          </small>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Container>
      <h2>{strNombre}</h2>
      <p>
        {strOrigen} {strDestino}
        <h5>{strHora}</h5>
      </p>
      {Type(TypeSearch)}
      <small>$ {strPrecio}</small>
      <Button
        onClick={() => {
          SetModalReserva(true);
          DataReserva({
            intId,
            strNombre,
            strOrigen,
            strDestino,
            strHora,
            strPrecio,
          });
        }}
        variant="primary"
        disabled={intEstado == 1 ? true : false}
      >
        Reservar
      </Button>
    </Container>
  );
};
