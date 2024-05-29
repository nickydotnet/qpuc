import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.linearBlue};
  font-family: 'Changa One', 'sans-serif';
  @media screen and (max-width: 500px) {
    justify-content: space-around;
    width: 100%;
    height: 85%;
  }
  @media screen and (max-width: 900px) {
    justify-content: space-evenly;
    width: 100%;
    height: 85%;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  @media screen and (min-width: 1200px) {
    height: 55%;
    width: 45%;
  }
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 370px;
    height: 450px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 80%;
    height: 60%;
  }
`

export const Title = styled.div`
  font-family: Alex Brush;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  text-align: center;
  color: ${colors.yellow};
  @media screen and (max-width: 500px) {
    font-size: 90px;
  }
`
export const RegisterButton = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: 'Changa One', 'sans-serif';
  box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);

  background: ${colors.yellow};
  width: 100px;
  height: 100px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 100px;
  cursor: pointer;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 100px;
    height: 100px;
    font-size: 16px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 120px;
    height: 160px;
  }
`
export const Input = styled.input`
  background: ${colors.lightBlue};
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 6px 5px 8px 3px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 1200px) {
    width: 280px;
    height: 35px;
    padding-left: 8px;
    ::placeholder {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 280px;
    height: 30px;
    padding-left: 8px;
    ::placeholder {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 140%;
    height: 20%;
    ::placeholder {
      font-size: 20px;
    }
  }
`
export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    margin-top: 30px;
  }
`
export const UpPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`
