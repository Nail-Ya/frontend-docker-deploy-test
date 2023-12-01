import styled from "styled-components/macro";
import StyledButton from "./StyledButton";

const PrimaryButton = styled(StyledButton)`
  ${({disabled}) => disabled
  ? ` color: #FFFFFF;
      background: #EEF0F1;
      `
  : ` color: #FFFFFF;
      background: #952424;
    `}

  height: 32px;
  width: 110px;

  ${({disabled}) => !disabled && `
    &:active:enabled,
    &:hover:enabled {
      color: #FFFFFF;
      background: #D03030;
      box-shadow: 0px 6px 12px 0px #4AA8DD 32%;
    }
  `}
`;

export default PrimaryButton;
