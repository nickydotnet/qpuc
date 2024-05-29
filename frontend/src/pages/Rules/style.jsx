import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

export const RulesWrapper = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 120px;
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
    width: 100%;
    height: 140%;
  }
`

export const Title = styled.p`
  display: flex;
  width: 25%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background: ${colors.linearOrange};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-size: 40px;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 85%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 130%;
  background: ${colors.linearWhite};
  box-shadow: 12px 12px 14px 6px rgba(0, 0, 0, 0.25);
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 90%;
    height: 160%;
  }
`

export const TextWrapper = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 20px;
  font-size: 20px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 16px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const PlayButton = styled(Link)`
  display: flex;
  width: 200px;
  height: 35px;
  border-radius: 100px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-family: 'Changa One', 'sans-serif';
  margin-bottom: 20px;
  background: ${colors.yellow};
  border: 2px solid #000000;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
`
export const LeaderboardButton = styled(Link)`
  display: flex;
  width: 200px;
  height: 35px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: 'Changa One', 'sans-serif';
  margin-bottom: 20px;
  background: ${colors.orange};
  border: 3px solid #000000;
  box-sizing: border-box;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`
