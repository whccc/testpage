import { Container } from './styles'
import React from 'react'
export const InfoBienvenida: React.FC = () => {
  return (
    <Container>
      <h2>Bienvenid@ a nuestra plataforma de reservación de vuelos.</h2>
      <ul>
        <li>- Tenemos Buenos Precios</li>
        <li>- Alta oferta de vuelos</li>
        <li>- Viajes seguros</li>
      </ul>
    </Container>
  )
}
