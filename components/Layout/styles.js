import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *{
      scroll-behavior: smooth;
      box-sizing: border-box;
      margin:0;
      padding:0;
    }
    body{
    }
    ul{
      list-style:none
    }
    button.btn-primary{
      background-color:#33bbff !important;
      border:1px solid #33bbff !important;
    }
`;
