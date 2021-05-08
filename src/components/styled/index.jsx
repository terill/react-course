import styled from 'styled-components';

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    cursor: pointer;
    user-select: none;
  }
  & + label:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 4px;
  }

  &:checked + label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
  }
`;

export const StyledButton = styled.button`
  margin: 0 4px;
  cursor: pointer;
`;
