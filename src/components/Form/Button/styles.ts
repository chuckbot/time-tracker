import styled from "styled-components";

export const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  padding: 5px 8px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &.primary {
    background: #20aa7f;
  }
  
  &.secondary {
    background: #909090;
    color: white;
  }

  &.outline {
    background: #fff;
    border: 1px solid #20aa7f;
    color: #20aa7f;
  }
`