import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  background: ${colors.lightBlue};
  border-top: 4px solid #000000;
`

export const Repository = styled.div`
  font-family: 'Changa One', 'sans-serif';
`

export const Credits = styled.div`
  font-family: 'Changa One', 'sans-serif';
`
export const GitHub = styled(Link)`
  font-family: 'Changa One', 'sans-serif';
`
