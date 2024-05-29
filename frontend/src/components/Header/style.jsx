import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 10%;
  padding-top: 15px;
  background: ${colors.darkBlue};
`
export const SoundButton = styled.button`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 30px;
  font-size: 16px;
  background: ${colors.orange};
  width: 65px;
  height: 65px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 100px;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 55px;
    height: 55px;
  }
`

export const DisconnectButton = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-right: 30px;
  font-size: 16px;
  background: ${colors.orange};
  width: 65px;
  height: 65px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 100px;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 55px;
    height: 55px;
  }
`
export const Illustration = styled.img`
  display: flex;
  align-self: center;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 75%;
    height: 75%;
  }
`

export const Icon = styled.img`
  width: 70%;
  height: 70%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (min-width: 300px) and (max-width: 790px) {
    width: 60%;
    height: 60%;
  }
`
