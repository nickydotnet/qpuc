import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vw;
  padding-bottom: 10vw;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.linearBlue};
  font-family: 'Changa One', 'sans-serif';
  @media screen and (min-width: 300px) and (max-width: 790px) {
    justify-content: flex-start;
    width: 100%;
    height: 85%;
  }
`
export const Illustration = styled.img`
  align-self: center;
  max-width: 45%;
  max-height: 45%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (min-width: 300px) and (max-width: 790px) {
    max-width: 80%;
    max-height: 80%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  width: 40%;
  height: 50%;
  background: ${colors.linearWhite};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  box-shadow: 12px 12px 14px 6px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 300px) and (max-width: 790px) {
    margin-top: 70px;
    margin-bottom: 30px;
    width: 320px;
    height: 330px;
  }
`

export const TextLogin = styled.label`
  font-size: 30px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 24px;
  }
`

export const Input = styled.input`
  height: 10%;
  width: 60%;
  background: ${colors.lightBlue};
  border: 1px solid #000000;
  padding-left: 15px;
  box-shadow: 6px 5px 8px 3px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 25px;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 280px;
    height: 35px;
    padding-left: 8px;
    ::placeholder {
      font-size: 16px;
    }
  }
`

export const LoginButton = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: 'Changa One', 'sans-serif';
  box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);

  background: ${colors.yellow};
  width: 15vh;
  height: 15vh;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 100%;
  cursor: pointer;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 100px;
    height: 100px;
    font-size: 16px;
  }
`
export const RegisterButton = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  background: ${colors.orange};
  width: 200px;
  height: 50px;
  border: 2px solid #000000;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 35px;
`

export const OverlayForm = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 100px;
  width: 40%;
  height: 20%;
  font-size: 30px;
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(242, 166, 22, 0.8) 0%,
    rgba(254, 227, 1, 0.8) 100%
  );
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 85%;
    height: 17%;
    margin-top: 70px;
    margin-bottom: 30px;
  }
`
export const ErrorMessage = styled.div`
  margin-bottom: 10px;
  color: red;
`
