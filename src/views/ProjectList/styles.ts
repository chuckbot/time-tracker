import styled from 'styled-components'

export const MainWrapper = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  div.loading-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export const ProjectListItem = styled.div `
  width: 500px;
  height: auto;
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px gray;

  div.clickable-area {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  :hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .2);
  }

  p.name {
    margin: 0;
    font-weight: 600;
  }
  p.description {
    margin: 20px 0 0 0 ;
    font-size: 15px;
    color: #606060;
  }

  div.actions-wrapper {
    width: 60px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 10px;
    top: 5px;
    z-index: 1;
    
    div.action-container {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border-radius: 4px;

      :hover {
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .2);
      }

      img {
        width: 15px;
      }
    }
  }
`;