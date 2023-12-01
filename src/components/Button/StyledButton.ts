import styled from "styled-components/macro";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 5px;
  user-select: none;
  cursor:  ${props => props.disabled ? 'default' : 'pointer'};
  outline: 0;
  font-size: 1rem;
  border: 0;
  text-align: center;
  position: relative;
  transition: 0.5s;
`;

export default StyledButton;
