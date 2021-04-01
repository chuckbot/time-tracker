import styled from 'styled-components'

export const MainTextareaWrapper = styled.textarea `
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  color: #323232;
  font-weight: 400;
  resize: none;

  ::placeholder {
    color: rgba(0, 0, 0, .2);

  }
`;