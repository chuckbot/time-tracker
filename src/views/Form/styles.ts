import styled from "styled-components";

const generalInputStyles = `
  width: 300px;
  margin: 10px 0;
`

export const FormWrapper = styled.form`

  div.name-input {
    ${generalInputStyles}
    margin-top: 0;
  }

  div.description-input {
    ${generalInputStyles}
  }

  div.time-input {
    ${generalInputStyles}
  }

  div.time-description-input {
    ${generalInputStyles}
  }

  div.buttons-wrapper {
    display: flex;
    
    div.button-container {
      margin-right: 10px
    }  
  }
`