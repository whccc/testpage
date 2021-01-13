import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #33bbff;
  background-color: #fff;
  padding: 5px;
  width: 100%;
  margin: 5px;
  border-radius: 10px;
  text-align: center;
  & small {
    display: block;
  }
  @media (min-width: 1024px) {
    width: 32.3%;
  }
`
