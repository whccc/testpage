import { Fragment } from "react";
import { StyledGlobal } from "./styles";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <StyledGlobal />
      <>{children}</>
    </Fragment>
  );
};
