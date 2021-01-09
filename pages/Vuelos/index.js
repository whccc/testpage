import { Fragment } from "react";
import { Layout } from "../../components/Layout";
import { Navigation } from "../../components/Navigation";
import { CardVuelos } from "../../components/CardVuelos";
import useUser from "../../hooks/useUser";
import {
  ContainerVuelos,
  ContainerComponent,
  ContainerConsultaVuelos,
  ContainerVuelosCard,
} from "../../styles/stylevuelos";
import Form from "react-bootstrap/Form";
const Vuelos = () => {
  const { Json, ValidateLogin, NavigationLogin } = useUser();
  if (typeof window !== "undefined") {
    if (!ValidateLogin()) {
      NavigationLogin();
      return null;
    }
  }
  return (
    <Fragment>
      <Layout>
        <ContainerVuelos>
          <Navigation />
          <ContainerComponent>
            <h2>Vuelos</h2>
            <ContainerConsultaVuelos>
              <div>
                <Form.Control type="text" placeholder="Origen" />
                <Form.Control type="text" placeholder="Destino" />
              </div>
              <div>
                <div>
                  <Form.Check
                    type="radio"
                    label="Horarios"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Tarifas"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="Estado"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </div>
              </div>
            </ContainerConsultaVuelos>
            <ContainerVuelosCard>
              <CardVuelos />
            </ContainerVuelosCard>
          </ContainerComponent>
        </ContainerVuelos>
      </Layout>
    </Fragment>
  );
};

export default Vuelos;
