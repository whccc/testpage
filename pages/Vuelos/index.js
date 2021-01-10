import { Fragment, useState } from "react";
import { Layout } from "../../components/Layout";
import { Navigation } from "../../components/Navigation";
import { CardVuelos } from "../../components/CardVuelos";
import useUser from "../../hooks/useUser";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Search from "react-search";
import { Modals } from "../../components/Modal";
import {
  ContainerVuelos,
  ContainerComponent,
  ContainerConsultaVuelos,
  ContainerVuelosCard,
  ContainerSearch,
} from "../../styles/stylevuelos";
import Form from "react-bootstrap/Form";
import { API } from "../../VariablesDeEntorno";

const ModalReserva = (
  { strNombre, intId, strOrigen, strDestino, strHora, strPrecio },
  SetModalReserva,
  ReserveFlight
) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Reservar vuelo de {strNombre}</h3>
      <p>
        {strOrigen}//{strDestino}
        <br />$ {strPrecio}
        <br /> {strHora}
      </p>
      <Button
        onClick={() => {
          ReserveFlight();
        }}
        variant="primary"
      >
        Aceptar
      </Button>{" "}
      <Button
        variant="danger"
        onClick={() => {
          SetModalReserva(false);
        }}
      >
        Cancelar
      </Button>
    </div>
  );
};

const Vuelos = ({ Data, Place }) => {
  const { Json, ValidateLogin, NavigationLogin } = useUser();
  const [ObjData, SetObjData] = useState(Data);
  const [TypeSearch, SetTypeSearch] = useState(1);
  const [ShowModalReserva, SetModalReserva] = useState(false);
  const [ShowModalAcept, SetShowModalAcept] = useState(false);
  const [ObjPlace, SetObjPlace] = useState(Place);
  const [DataReserva, SetDataReserva] = useState({});
  const [DataOrigen, SetDataOrigen] = useState("");
  const [DataDestino, SetDataDestino] = useState("");
  const [Check, SetChek] = useState({
    Time: true,
    Cost: false,
    State: false,
  });
  if (typeof window !== "undefined") {
    if (!ValidateLogin()) {
      NavigationLogin();
      return null;
    }
  }
  const TypeSearchFlight = async (Type) => {
    let Data = [];
    switch (Type) {
      case "Time":
        Data = await axios.get(`${API}/Flight`);
        SetObjData(Data.data);
        SetChek({
          Time: true,
          Cost: false,
          State: false,
        });
        SetTypeSearch(1);
        break;
      case "Cost":
        Data = await axios.get(`${API}/Flight/Costo`);
        SetObjData(Data.data);
        SetChek({
          Time: false,
          Cost: true,
          State: false,
        });
        SetTypeSearch(2);
        break;
      case "State":
        Data = await axios.get(`${API}/Flight`);
        SetObjData(Data.data);
        SetChek({
          Time: false,
          Cost: false,
          State: true,
        });
        SetTypeSearch(3);
        break;
    }
  };

  const ReserveFlight = async () => {
    const Data = await axios.post(`${API}/Flight/reserve`, {
      DataReserva,
      DataUser: Json,
    });
    if (Data.data.Success) {
      SetModalReserva(false);
      SetShowModalAcept(true);
    }
  };

  const SearchPlace = async () => {
    Data = await axios.post(`${API}/Flight/SearchPlace`, {
      strOrigen: DataOrigen,
      strDestino: DataDestino,
    });

    SetObjData(Data.data);
  };
  return (
    <Fragment>
      <Layout>
        <ContainerVuelos>
          <Navigation />
          <ContainerComponent>
            <h2>Vuelos</h2>
            <ContainerConsultaVuelos>
              <ContainerSearch>
                <Form.Control
                  style={{ display: "none" }}
                  type="text"
                  placeholder="Origen"
                />
                <Form.Control
                  style={{ display: "none" }}
                  type="text"
                  placeholder="Destino"
                />
                <Search
                  onItemsChanged={(Data) => {
                    if (Data.length != 0) {
                      SetDataOrigen(Data[0].value);
                    }
                  }}
                  items={ObjPlace}
                  placeholder="Origen"
                />
                <Search
                  onItemsChanged={(Data) => {
                    if (Data.length != 0) {
                      SetDataDestino(Data[0].value);
                    }
                  }}
                  items={ObjPlace}
                  placeholder="Destino"
                />
                <Button variant="primary" onClick={SearchPlace}>
                  Buscar
                </Button>
              </ContainerSearch>
              <div>
                <div>
                  <Form.Check
                    type="radio"
                    checked={Check.Time}
                    label="Horarios"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    onClick={() => {
                      TypeSearchFlight("Time");
                    }}
                  />
                  <Form.Check
                    type="radio"
                    checked={Check.Cost}
                    label="Tarifas"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    onClick={() => {
                      TypeSearchFlight("Cost");
                    }}
                  />
                  <Form.Check
                    type="radio"
                    checked={Check.State}
                    label="Estado"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    onClick={() => {
                      TypeSearchFlight("State");
                    }}
                  />
                </div>
              </div>
            </ContainerConsultaVuelos>
            <ContainerVuelosCard>
              {ObjData.length != 0 ? (
                ObjData.map((Vuelos) => {
                  return (
                    <CardVuelos
                      {...Vuelos}
                      TypeSearch={TypeSearch}
                      SetModalReserva={SetModalReserva}
                      DataReserva={SetDataReserva}
                    />
                  );
                })
              ) : (
                <h1>No se encontrarón vuelos.</h1>
              )}
            </ContainerVuelosCard>
          </ContainerComponent>
        </ContainerVuelos>
      </Layout>

      <Modals Show={ShowModalReserva} onHiden={SetModalReserva}>
        {ModalReserva(DataReserva, SetModalReserva, ReserveFlight)}
      </Modals>
      <Modals Show={ShowModalAcept} onHiden={SetShowModalAcept}>
        <h4 style={{ textAlign: "center" }}>Vuelo reservado con exíto.</h4>
      </Modals>
    </Fragment>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API}/Flight`);
  const Data = await res.json();
  const resPlace = await fetch(`${API}/Flight/Place`);
  const Place = await resPlace.json();
  return {
    props: {
      Data,
      Place,
    },
  };
}

export default Vuelos;
