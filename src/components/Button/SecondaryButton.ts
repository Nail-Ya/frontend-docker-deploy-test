import styled from "styled-components/macro";
import StyledButton from "./StyledButton";

const SecondaryButton = styled(StyledButton)`
  ${({disabled}) => disabled
  ? ` color: #EEF0F1;
      background: #FFFFFF;
      border: 1px solid #EEF0F1;
      `
  : ` color: #2395FF;
      background: #FFFFFF;
      border: 1px solid #2395FF;
    `}

  height: 32px;
  width: 110px;

  ${({disabled}) => !disabled && `
    &:active,
    &:hover {
      color: #006BCD;
      background: #FFFFFF;
      border: 1px solid #006BCD;
      box-shadow: 0px 6px 12px 0px #4AA8DD 32%;
    }
  `}
`;

export default SecondaryButton;
