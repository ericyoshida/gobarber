import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #667360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 50px #232129 inset;
    -webkit-box-shadow: 0 0 0 50px #232129 inset;
    -webkit-text-fill-color: #f4ede8 !important;
  }

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #667360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
