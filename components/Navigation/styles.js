import styled from "styled-components";

export const ContainerTopNavigation = styled.div`
  background-color: #33bbff;
  color: #fff;
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & img {
    width: 70px;
    left: 10px;
    position: relative;
    border-radius: 100%;
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
  background-color: #33bbff;
  min-height: 100vh;

  padding: 5px;
  z-index: 1;
  transition: all ease-in-out 0.5s;
  a {
    color: #000;
    display: block;
    padding: 5px;
    border-bottom: 1px solid #fff;
    color: #fff;
    &:hover {
      opacity: 0.6;
      text-decoration: none;
    }
  }

  @media (min-width: 1024px) {
    position: relative;
    height: 110vh;
  }
`;
