import styled from "styled-components";

export const ContainerVuelos = styled.div``;

export const ContainerComponent = styled.div`
  max-width: 1000px;

  @media (min-width: 1024px) {
    position: absolute !important;
    top: 220px;
    border-radius: 10px;
    left: 153px;
    padding: 10px;
    background-color: #fff;
    width: calc(100% - 153px);
    right: 0;
    bottom: 0;
    margin: auto;
    height: 105%;
  }

  & h2 {
    text-align: center;
  }
`;

export const ContainerConsultaVuelos = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  & > div:nth-child(1) {
    max-width: 400px;
    & input {
      width: 100%;
    }
    margin: auto;
    flex-direction: row;
    & input {
      justify-content: center;
      &:nth-child(1) {
        margin-right: 5px;
      }
    }
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    & > div {
      width: 400px;
      display: flex;
      flex-direction: row;
      & div {
        flex: 1 1 auto;
      }

      & div:nth-child(2) {
        text-align: center;
      }
      & div:nth-child(3) {
        text-align: end;
      }
    }
  }
`;
export const ContainerSearch = styled.div`
  & div:nth-child(1) {
    height: 200px;
    overflow: auto;
  }
`;
export const ContainerVuelosCard = styled.div`
  border: 1px solid #ddd;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
