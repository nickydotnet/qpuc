import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

export const ScoreWrapper = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.linearBlue};
  @media screen and (min-width: 300px) and (max-width: 790px) {
    height: 85%;
  }
`

export const Title = styled.p`
  display: flex;
  width: 30%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background: ${colors.linearOrange};
  font-family: 'Changa One', 'sans-serif';
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-size: 40px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    height: 60px;
    width: 350px;
    font-size: 28px;
    margin-bottom: 10px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 35%;
  height: 60%;
  background: white;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  box-shadow: 12px 12px 14px 6px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 90%;
    height: 55%;
  }
`

export const TotalTime = styled.div`
  margin-left: 20px;
  font-size: 32px;
  font-family: 'Changa One', 'sans-serif';
`

export const Score4 = styled.div`
  margin-left: 20px;
  font-size: 32px;
  font-family: 'Changa One', 'sans-serif';
`

export const TotalErrors = styled.div`
  margin-left: 20px;
  font-size: 32px;
  font-family: 'Changa One', 'sans-serif';
`
export const Separation = styled.div`
  display: flex;
  align-self: center;
  margin-top: 30px;
  left: 0;
  height: 2%;
  width: 100.5%;
  background: black;
`

export const FinalScore = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 20px;
  font-size: 32px;
  font-family: 'Changa One', 'sans-serif';
  @media screen and (min-width: 300px) and (max-width: 790px) {
    margin-left: 0px;
  }
`

export const ScoreNumber = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 50px;
  width: 100%;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  background: ${colors.linearOrange};
  font-family: 'Changa One', 'sans-serif';
`

export const LeaderboardButton = styled(Link)`
  display: flex;
  margin-top: 40px;
  width: 300px;
  height: 60px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-family: 'Changa One', 'sans-serif';
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  background: ${colors.orange};
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`
