import { Fragment, useEffect, useState } from "react";
import { Navigation } from "../../components/Navigation";
import { Layout } from "../../components/Layout";
import { Container, ContainerFlight } from "../../styles/stylemisvuelos";
import axios from "axios";
import { API } from "../../VariablesDeEntorno";
import { CardMyFlight } from "../../components/CardMyFlight";
import useUser from "../../hooks/useUser";
import { Modals } from "../../components/Modal";
import Button from "react-bootstrap/Button";
const ModalDeleteReserver = (DeleteReserve) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Cancelar Reserva</h3>
      <p>¿ Desea cancelar reserva?</p>{" "}
      <Button variant="primary" onClick={DeleteReserve}>
        Aceptar
      </Button>
    </div>
  );
};
const FlightUser = () => {
  const { Json } = useUser();
  const [ObjData, SetObjData] = useState([]);
  const [objDataDelete, SetObjDataDelete] = useState([]);
  const [ShowModalReserva, SetModalReserva] = useState(false);
  useEffect(async () => {
    if (Json != null) {
      const Data = await axios.get(`${API}/Flight/User/${Json.intId}`);
      SetObjData(Data.data);
    }
  }, [Json, ShowModalReserva]);

  const DeleteReserve = async () => {
    const Data = await axios.delete(`${API}/Flight/Delete`, {
      data: { IntId: objDataDelete },
    });
    if (Data.data.Success) {
      SetModalReserva(false);
    }
  };
  return (
    <Fragment>
      <Layout>
        <Navigation />
        <Container>
          <h3>Mis Reservas</h3>
          <ContainerFlight>
            {ObjData.map((Data) => {
              return (
                <CardMyFlight
                  {...Data}
                  SetModalReserva={SetModalReserva}
                  SetObjDataDelete={SetObjDataDelete}
                />
              );
            })}
          </ContainerFlight>
        </Container>
      </Layout>
      <Modals Show={ShowModalReserva} onHiden={SetModalReserva}>
        {ModalDeleteReserver(DeleteReserve)}
      </Modals>
    </Fragment>
  );
};

export default FlightUser;
