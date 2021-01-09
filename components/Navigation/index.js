import Link from "next/link";
import { ContainerNavigation, ContainerTopNavigation } from "./styles";
import { BsSearch, BsFillCalendarFill, BsJustify } from "react-icons/bs";
import { useState } from "react";
import useUser from "../../hooks/useUser";
export const Navigation = () => {
  const { DeleteJsonData } = useUser();

  const [ShowMenu, SetMenu] = useState(false);
  return (
    <div>
      <ContainerTopNavigation>
        <div>
          <BsJustify
            onClick={() => {
              SetMenu(!ShowMenu);
            }}
          />
          <Link href="/">
            <img src="./Person.png" />
          </Link>
        </div>
        <div>
          <span onClick={DeleteJsonData}>Cerrar Sesión</span>
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
            <Link href="/EstadoVuelos">
              <a>
                <BsFillCalendarFill /> Estados Vuelos
              </a>
            </Link>
          </li>
        </ul>
      </ContainerNavigation>
    </div>
  );
};
