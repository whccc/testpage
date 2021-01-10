import { Fragment, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Container } from "./styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { API } from "../../VariablesDeEntorno";
import useUser from "../../hooks/useUser";
import axios from "axios";
export const Login = () => {
  const { SetJsonData } = useUser();
  const [StrCedula, SetStrCedula] = useState("");
  const [StrNombre, SetStrNombre] = useState("");
  const [StrApellido, SetStrApellido] = useState("");
  const [StrUsuario, SetStrUsuario] = useState("");
  const [StrClave, SetStrClave] = useState("");
  const [StrDtNacimiento, SetStrDtNacimiento] = useState("");
  const [CmpAlert, SetCmpAlert] = useState({
    Show: false,
    Text: "",
    Type: "",
  });

  const [StrUserLogin, SetStrUserLogin] = useState("");
  const [StrPasswordLogin, SetStrPasswordLogin] = useState("");
  const [CmpAlertLogin, SetCmpAlertLogin] = useState({
    Show: false,
    Text: "",
    Type: "",
  });

  const Registro = async () => {
    const Data = await axios.post(`${API}/login/register`, {
      StrCedula,
      StrNombre,
      StrApellido,
      StrUsuario,
      StrClave,
      StrDtNacimiento,
    });
    if (Data.data.Success) {
      SetCmpAlert({
        Show: true,
        Type: "success",
        Text: Data.data.Message,
      });
      SetStrCedula("");
      SetStrNombre("");
      SetStrApellido("");
      SetStrUsuario("");
      SetStrClave("");
      SetStrDtNacimiento("");
    }
  };
  const ValidateRegistro = () => {
    if (StrCedula == "") {
      SetCmpAlert({
        Show: true,
        Type: "danger",
        Text: "Digite Cedula",
      });
      return;
    }
    if (StrNombre == "") {
      SetCmpAlert({
        Show: true,
        Type: "danger",
        Text: "Digite Nombre",
      });
      return;
    }
    if (StrApellido == "") {
      SetCmpAlert({
        Show: true,
        Type: "danger",
        Text: "Digite Apellido",
      });
      return;
    }
    if (StrUsuario == "") {
      SetCmpAlert({
        Show: true,
        Type: "danger",
        Text: "Digite Usuario",
      });
      return;
    }
    if (StrClave == "") {
      SetCmpAlert({
        Show: true,
        Type: "danger",
        Text: "Digite Clave",
      });
      return;
    }
    if (StrDtNacimiento == "") {
      SetCmpAlert({
        Show: true,
        Type: "danger",
        Text: "Seleccione Fecha Nacimiento",
      });
      return;
    }

    Registro();
  };

  const Logins = async () => {
    const Data = await axios.post(`${API}/login`, {
      StrUser: StrUserLogin,
      StrPassword: StrPasswordLogin,
    });
    if (Data.data.Success) {
      SetJsonData(Data.data);
    } else {
      SetCmpAlertLogin({
        Show: true,
        Type: "danger",
        Text: Data.data.strMessage,
      });
    }
  };
  return (
    <Container>
      <Tabs defaultActiveKey="Iniciar">
        <Tab eventKey="Iniciar" title="Iniciar">
          <Form.Control
            onChange={(e) => SetStrUserLogin(e.target.value.trim())}
            value={StrUserLogin}
            type="text"
            placeholder="Digite Usuario"
          />
          <br />
          <Form.Control
            value={StrPasswordLogin}
            type="password"
            onChange={(e) => SetStrPasswordLogin(e.target.value.trim())}
            placeholder="Digite Clave"
          />
          <Alert variant={CmpAlertLogin.Type} show={CmpAlertLogin.Show}>
            {CmpAlertLogin.Text}
          </Alert>
          <br />
          <Button variant="primary" onClick={Logins}>
            Iniciar
          </Button>
        </Tab>
        <Tab className="ContainerRegistro" eventKey="Registro" title="Registro">
          <Form.Control
            type="number"
            onChange={(e) => SetStrCedula(e.target.value.trim())}
            value={StrCedula}
            placeholder="Digite Cedula"
          />
          <Form.Control
            type="text"
            onChange={(e) => SetStrNombre(e.target.value.trim())}
            value={StrNombre}
            placeholder="Digite Nombre"
          />
          <Form.Control
            type="text"
            onChange={(e) => SetStrApellido(e.target.value.trim())}
            value={StrApellido}
            placeholder="Digite Apellido"
          />
          <Form.Control
            type="text"
            onChange={(e) => SetStrUsuario(e.target.value.trim())}
            value={StrUsuario}
            placeholder="Digite Usuario"
          />
          <Form.Control
            type="password"
            placeholder="Digite Clave"
            onChange={(e) => SetStrClave(e.target.value.trim())}
            value={StrClave}
          />
          <small>Fecha Nacimiento</small>
          <Form.Control
            type="date"
            onChange={(e) => {
              SetStrDtNacimiento(e.target.value);
            }}
          />
          <Alert show={CmpAlert.Show} variant={CmpAlert.Type}>
            {CmpAlert.Text}
          </Alert>
          <Button variant="primary" onClick={ValidateRegistro}>
            Registrar
          </Button>
        </Tab>
      </Tabs>
    </Container>
  );
};
