import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const MainWrapper = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-evenly;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.linearBlue};
  @media screen and (min-width: 300px) and (max-width: 790px) {
    height: 100%;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 30%;
  color: black;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  background: ${colors.linearOrange};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: 'Changa One', 'sans-serif';
  @media screen and (min-width: 300px) and (max-width: 790px) {
    height: 60px;
    width: 350px;
    font-size: 28px;
    margin-bottom: 10px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  width: 70%;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 90%;
    margin-bottom: 10px;
  }
`

export const Time = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 1.5px black;
  font-family: 'Changa One', 'sans-serif';

  color: white;
  font-size: 40px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 20px;
  }
`

export const TimeCounter = styled.div`
  display: flex;
  width: 187px;
  height: 106px;

  align-items: center;
  justify-content: center;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  background: ${colors.lightBlue};
  border: 2px solid #000000;
  box-sizing: border-box;
  font-size: 60px;
  color: black;
  border-radius: 25px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 100px;
    height: 56px;
    font-size: 40px;
  }
`

export const Score = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 1.5px black;
  font-family: 'Changa One', 'sans-serif';
  color: white;
  font-size: 40px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 20px;
  }
`

export const ScoreCounter = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 154px;
  height: 154px;

  box-sizing: border-box;
  border-radius: 100px;
  background: #ffffff;
  box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Changa One', 'sans-serif';
  font-size: 60px;
  color: black;
  border: 3px solid #000000;
  box-sizing: border-box;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 87px;
    height: 56px;
    font-size: 40px;
  }
`

export const Errors = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 1.5px black;
  font-family: 'Changa One', 'sans-serif';
  color: white;
  font-size: 40px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 20px;
  }
`
export const ErrorsCounter = styled.div`
  display: flex;

  align-self: center;
  align-items: center;
  justify-content: center;

  width: 187px;
  height: 106px;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  color: black;
  font-size: 60px;
  background: ${colors.lightBlue};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 87px;
    height: 56px;
    font-size: 40px;
  }
`

export const AnswersWrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 50%;
  height: 50%;
  box-shadow: 12px 12px 14px 6px rgba(0, 0, 0, 0.25);
  background: ${colors.linearOrange};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 92%;
    height: 100%;
    font-size: 40px;
    padding-top: 20px;
    justify-content: flex-start;
  }
`

export const Question = styled.div`
  text-align: center;
  font-family: 'Changa One', 'sans-serif';
  font-size: 32px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const Theme = styled.div`
  font-family: 'Changa One', 'sans-serif';
  font-size: 24px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`

export const QuestionPoints = styled.div`
  font-family: 'Changa One', 'sans-serif';
  font-size: 24px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 18px;
  }
`

export const Answers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  flex-wrap: wrap;
  font-family: 'Changa One', 'sans-serif';
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 100%;
  }
`
