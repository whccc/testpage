import Link from 'next/link'
import { ContainerNavigation, ContainerTopNavigation } from './styles'
import { BsSearch, BsFillCalendarFill, BsJustify } from 'react-icons/bs'
import React, { useState } from 'react'
import useUser from '../../hooks/useUser'

export const Navigation: React.FC = () => {
  const { DeleteJsonData } = useUser()

  const [ShowMenu, SetMenu] = useState(false)

  return (
    <div>
      <ContainerTopNavigation>
        <div>
          <BsJustify
            onClick={() => {
              SetMenu(!ShowMenu)
            }}
          />
          <Link href="/">
            <img style={{ cursor: 'pointer' }} src="./Person.png" />
          </Link>
        </div>
        <div>
          <span style={{ cursor: 'pointer' }} onClick={DeleteJsonData}>
            Cerrar Sesión
          </span>
        </div>
      </ContainerTopNavigation>
      <ContainerNavigation ShowMenu={ShowMenu}>
        <ul>
          <li>
            <Link href="/Vuelos">
              <a>
                <BsSearch /> Consulta Vuelos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/MisVuelos">
              <a>
                <BsFillCalendarFill /> Mis Vuelos
              </a>
            </Link>
          </li>
        </ul>
      </ContainerNavigation>
    </div>
  )
}
