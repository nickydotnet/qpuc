import styled from 'styled-components'

export const Arrow = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 80px;
  height: 60px;
  background: ${({ page }) => (page === '/leaderboard' ? 'white' : '#CADDEE')};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    margin-left: ${({ page }) => (page === '/leaderboard' ? '300px' : '40px')};
    margin-bottom: ${({ page }) => (page === '/leaderboard' ? '0px' : '280px')};
  }
  @media screen and (min-width: 300px) and (max-width: 790px) {
    margin-left: ${({ page }) => (page === '/leaderboard' ? '20px' : '20px')};
    margin-bottom: ${({ page }) =>
      page === '/leaderboard' ? '-140px' : '330px'};
    width: 60px;
    height: 40px;
  }
`
export const Illustration = styled.img`
  display: flex;
  align-self: center;
`
