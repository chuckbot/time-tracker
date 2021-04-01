import styled from 'styled-components'

export const MainWrapper = styled.div `
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  background-image: linear-gradient(to right top, #4858b1, #00a9ee, #00fff4, #00fff4, #02da80, #09b543);
  display: flex;
  justify-content: center;

  div.visible-area  {
    width: 1320px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;