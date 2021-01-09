import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  padding: 5px;
  width: 200px;
  border-radius: 10px;
  text-align: center;
  & small {
    display: block;
  }
`;
