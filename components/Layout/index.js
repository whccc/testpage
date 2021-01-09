import { Fragment } from "react";
import { StyledGlobal } from "./styles";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <StyledGlobal />
      {children}
    </Fragment>
  );
};
