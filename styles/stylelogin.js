import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  @media (min-width: 1024px) {
    & {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div {
      width: 500px;
      height: auto;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 5px 5px #ddd;
    }
  }
`;
