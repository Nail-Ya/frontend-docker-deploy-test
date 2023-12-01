import React, { Children, ReactNode } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import StyledButton from './StyledButton';
import styled from "styled-components/macro";
import LoadingIndicator from '../LoadingIndicator';

export const InProgressIcon = styled(LoadingIndicator)`
  width:14px;
  height: 14px;
  margin: 0 5px;
`;

export interface Props {
  onClick?(e: any): void;
  primary?: boolean;
  secondary?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  style?: object;
}
function Button({onClick, children, primary, secondary, style, disabled = false, loading, ...args}: Props) {

  let ReturnButton = StyledButton;
  if (primary) {
    ReturnButton = PrimaryButton;
  }
  if (secondary) {
    ReturnButton = SecondaryButton;
  }
  return (
    <ReturnButton style={style} onClick={onClick} disabled={disabled} {...args}>
      {loading && <InProgressIcon color={disabled ? '#999' : '#FFF'} />}
      {Children.toArray(children)}
    </ReturnButton>
  );
}

export default Button;
