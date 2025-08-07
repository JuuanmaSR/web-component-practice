import styled from "@emotion/styled";
export const Button = styled.button`
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.7em 0.7em;
  opacity: 0.3;
  cursor: pointer;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--primary-hover);
  }
  :disabled {
    cursor: not-allowed;
  }
`;
