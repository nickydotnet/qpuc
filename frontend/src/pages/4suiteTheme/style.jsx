import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const Suite4Wrapper = styled.div`
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

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 60px;
  -webkit-text-stroke: 2px black;
  font-family: 'Changa One', 'sans-serif';
  @media screen and (min-width: 300px) and (max-width: 790px) {
    font-size: 40px;
    text-align: center;
  }
`

export const Themes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  width: 1200px;
  flex-wrap: wrap;
  font-family: 'Changa One', 'sans-serif';
  @media screen and (min-width: 300px) and (max-width: 790px) {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 92%;
    margin-top: 10px;
  }
`
export const OverlayTheme = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

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
  font-family: 'Changa One', 'sans-serif';
  @media screen and (min-width: 300px) and (max-width: 790px) {
    margin-top: 30px;
    width: 80%;
    height: 22%;
    font-size: 24px;
  }
`
