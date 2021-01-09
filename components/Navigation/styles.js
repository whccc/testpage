import styled from "styled-components";

export const ContainerTopNavigation = styled.div`
  background-color: #ddd;
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & img {
    width: 80px;
    left: 10px;
    position: relative;
  }
  & div:nth-child(1) {
    flex: 1 1 auto;
  }
  & div:nth-child(2) {
    flex: 1 1 auto;
    text-align: right;
  }
  & svg {
    font-size: 40px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    & svg {
      display: none;
    }
    & img {
      left: 30px;
    }
  }
`;

export const ContainerNavigation = styled.div`
  position: absolute;
  left: ${(props) => (props.ShowMenu ? "-100%" : "0%")};
  display: inline-block;
  background-color: #ddd;
  min-height: 100vh;
  padding: 5px;
  transition: all ease-in-out 0.5s;
  a {
    color: #000;
    display: block;
    padding: 5px;
    border-bottom: 1px solid #000;
    &:hover {
      opacity: 0.6;
      text-decoration: none;
    }
  }

  @media (min-width: 1024px) {
    position: relative;
  }
`;
