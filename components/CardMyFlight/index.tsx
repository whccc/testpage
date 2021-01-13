import { Container } from './styles'
import React from 'react'

import Button from 'react-bootstrap/Button'

interface Card {
  intIdReserva: number
  strOrigen: string
  strDestino: string
  strPrecio: string
  dtFechaReserva: string
  strNombre: string
  strHora: string
  SetModalReserva
  SetObjDataDelete
}

export const CardMyFlight: React.FC<Card> = ({
  intIdReserva,
  strOrigen,
  strDestino,
  strPrecio,
  dtFechaReserva,
  strNombre,
  strHora,
  SetModalReserva,
  SetObjDataDelete
}) => {
  const FechaReserva = dtFechaReserva.split('T')[0].split('-')
  return (
    <Container>
      <h2>{strNombre}</h2>
      <p>
        {strOrigen} {strDestino}
        <small>$ {strPrecio}</small>
        <small>
          Fecha Reserva {FechaReserva[2]}
          {'/'}
          {FechaReserva[1]}
          {'/'}
          {FechaReserva[0]}
        </small>
        <small>Fecha Salida {strHora}</small>
      </p>
      <Button
        variant="danger"
        onClick={() => {
          SetModalReserva(true)
          SetObjDataDelete(intIdReserva)
        }}
      >
        Cancelar
      </Button>
    </Container>
  )
}
