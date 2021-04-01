import styled from 'styled-components'

export const MainWrapper = styled.div `
  width: 100%;
  height: 100%;
  max-height: 634px;
  background: white;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  img.return-icon {
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    cursor: pointer;
  }

  p.name-label,
  p.description-label {
    margin: 0;
    color: #909090;
    font-size: 15px;
  }

  p.name,
  p.description { 
    color: #323232;
    margin: 5px 0 20px 0;
    font-size: 16px;
  }

  div.divider {
    margin: 40px auto 30px auto;
    width: 90%;
    height: 1px;
    background: rgba(0, 0, 0, .2);
    justify-self: center;
  }

  div.time-form {
    width: 100%;
    background: rgba(0, 0, 0, .3);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 5px;
    margin-bottom: 20px;

    h2.create-time-title {
      color: white;
      font-size: 16px;
      margin: 0 0 20px 0;
    }
  }

  div.times-wrapper {
    p.times-label {
      margin: 0;
      color: #909090;
      font-size: 15px;
    }

    div.table-wrapper {
      margin-top: 20px;
      height: 100px;
      overflow-y: scroll;

      p.empty-text {
        color: #909090;
        font-size: 15px;
      }
    }
  }
`;

export const SingleTimeItem = styled.div `
  width: 500px;
  height: auto;
  background: white;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
  position: relative;
  
  p.time-amount {
    margin: 0;
    font-size: 15px;
    font-weight: bolder;
    color: #404040;
  }

  p.time-description {
    margin: 10px 0 0 0;
    font-size: 15px;
  }

  div.delete-icon-container {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      border: 1px solid gray;
    }

    img {
      width: 15px;
    }
  }
`;

export const FormWrapper = styled.form `
  width: 600px;

  div.time-input {
    margin-bottom: 10px;
  }

  div.time-description-input {

  }
  
  div.buttos-wrapper {
    margin-top: 10px;
    display: flex;

    div.accept-button {
      
    }

    div.reset-button {
      margin-right: 10px;
    }
  }
`;