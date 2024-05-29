import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding-top: 20px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 90%;
  background: ${colors.linearBlue};
  font-family: 'Changa One', 'sans-serif';
  @media screen and (min-width: 300px) and (max-width: 790px) {
    padding-top: 0px;
    justify-content: flex-start;
    width: 100%;
    height: 85%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 90%;
  background: ${colors.linearWhite};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  box-shadow: 12px 12px 14px 6px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 90%;
    height: 60%;
  }
`

export const TextWrapper = styled.p`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 26px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 16px;
  }
`

export const Title = styled.p`
  display: flex;
  width: 40%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background: ${colors.linearOrange};
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-size: 40px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 20px;
    width: 78%;
    height: 7%;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
  }
`

export const PlayButton = styled(Link)`
  display: flex;
  width: 25%;
  height: 10%;
  border-radius: 100px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: 'Changa One', 'sans-serif';
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  background: ${colors.yellow};
  border: 2px solid #000000;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 20px;
    width: 45%;
  }
`
