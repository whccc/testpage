import { Layout } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Container } from "../styles/stylestart";
import useUser from "../hooks/useUser";
import { useEffect, useState } from "react";
const Index = () => {
  const { Json, ValidateLogin, NavigationLogin } = useUser();
  if (typeof window !== "undefined") {
    if (!ValidateLogin()) {
      NavigationLogin();
      return null;
    }
  }
  const [StrName, SetStrName] = useState("");
  const [StrLastName, SetStrLastName] = useState("");
  useEffect(() => {
    SetStrName(Json == null ? "" : Json.strName);
    SetStrLastName(Json == null ? "" : Json.strLastName);
  }, [Json]);

  return (
    <Layout>
      <Navigation />
      <Container>
        <h1>
          Bienvenid@ {StrName} {StrLastName}
        </h1>
      </Container>
    </Layout>
  );
};
export default Index;
