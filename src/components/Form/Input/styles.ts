import styled from 'styled-components'

export const MainInputWrapper = styled.input `
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  color: #323232;
  font-weight: 400;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::placeholder {
    color: rgba(0, 0, 0, .2);

  }
`;