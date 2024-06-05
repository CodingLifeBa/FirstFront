import styled from 'styled-components';

const Buton = styled.button`
  background-color: #3498db;
  color: white;
  font-size: 1.2em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
export default function Button({ children }) {
  return (
      <Button>{children}</Button>
  );
}