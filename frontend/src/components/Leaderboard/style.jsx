import styled from 'styled-components'

export const TableDiv = styled.table`
  width: 100%;
  height: 100%;
`

export const Column = styled.td`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  font-family: 'Changa One', 'sans-serif';
  width: 300%;
  font-size: 40px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 20px;
  }
`

export const Line = styled.tr`
  display: flex;
  align-self: center;
  font-family: 'Changa One', 'sans-serif';
  font-size: 40px;
  width: 100%;
`
export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
`
export const Separation = styled.div`
  display: flex;
  align-self: center;
  margin-left: -2px;
  height: 3px;
  width: 101%;
  background: black;
`
