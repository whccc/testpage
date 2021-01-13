import { Container } from './styles'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import React from 'react'

interface Card {
  intId: number
  strNombre: string
  strOrigen: string
  strDestino: string
  strPrecio: string
  nAsientos: string
  intEstado: number
  strHora: string
  TypeSearch: number
  SetModalReserva
  DataReserva
}

export const CardVuelos: React.FC<Card> = ({
  intId,
  strNombre,
  strOrigen,
  strDestino,
  strPrecio,
  nAsientos,
  intEstado,
  strHora,
  TypeSearch,
  SetModalReserva,
  DataReserva
}) => {
  const Type = TypeSearch => {
    if (TypeSearch === 3) {
      return (
        <>
          <small>Asientos: {nAsientos}</small>
          <small>
            {intEstado === 1 ? (
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
      )
    } else {
      return null
    }
  }

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
          SetModalReserva(true)
          DataReserva({
            intId,
            strNombre,
            strOrigen,
            strDestino,
            strHora,
            strPrecio
          })
        }}
        variant="primary"
        disabled={intEstado === 2}
      >
        Reservar
      </Button>
    </Container>
  )
}
