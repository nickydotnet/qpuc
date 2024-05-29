import colors from './colors'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`

export const Loader = styled.div`
  display: flex;
  align-self: center;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 60px;
  border: 12px solid ${colors.orange};
  border-bottom-color: transparent;
  border-radius: 80px;
  animation: ${rotate} 1s infinite linear;
  height: 30;
  width: 30;
`
