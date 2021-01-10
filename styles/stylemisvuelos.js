import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 10px;
  max-width: 1000px;
  @media (min-width: 1024px) {
    position: absolute;
    width: calc(100% - 153px);
    margin: auto;
    left: 153px;
    right: 0;
    bottom: 0;
    top: 110px;
  }
`;
export const ContainerFlight = styled.div`
  border: 1px solid #ddd;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
