import styled, {css} from "styled-components/macro";
import CloseIconS from "assets/icons/CloseIcon";
import TextOverflowTooltip from "components/TextOverflowTooltip";
import { NumericFormat } from "react-number-format";

export const Label = styled.label`
  font-size: 1rem;
  text-align: left;
  ${props => props.inline
  ? css`
      display: inline-flex;
      flex-direction: row;
      align-items: center;
   `
  : css`display: block;`}
  color: #FFFFFF;
`
export const InputLabel = styled.span`
  word-break: keep-all;
  white-space: nowrap;
  padding-right: ${props => props.inline ? '10px' : '0'};
  color: #FFFFFF;

  @media print {
    white-space: normal;
  }
`

export const Input = styled.input`
  padding: 0;
  width: 100%;
  border: 0;
  outline: 0;
  height: 100%;
  background-color: ${props => props.readOnly ? '#F2F2F2' : '#EDF2F7'};
`;

export const NumberFormatInput = styled(NumericFormat)`
  padding: 0;
  width: 100%;
  border: 0;
  outline: 0;
  height: 100%;
  background-color: ${props => props.readOnly ? '#F2F2F2' : '#FFFFFF'};
`;

export const InputWrapper = styled.div`
  background-color: ${props => props.readOnly ? '#F2F2F2' : '#FFFFFF'};
  border: 1px solid ${props => props.error ? '#D43E74' : '#EEF0F1'};
  background-color: #EDF2F7;
  box-sizing: border-box;
  border-radius: 5px;
  display: inline-flex;
  width: 100%;
  height: 32px;
  padding: ${props => props.iconPosition === 'right' ? '7px 0 7px 12px' : '7px 12px 7px 0'};
  margin-top: ${props => props.inline ? '0' : '10px'};
  color: #305F8B;
  flex-direction: ${props => props.iconPosition === 'right' ? 'row-reverse' : 'row'};
  ${props => props.icon
    ? css`
      padding: ${props.iconPosition === 'right' ? '7px 0 7px 12px' : '7px 12px 7px 0'};
   `
    : css`padding: 7px 12px;`}
  ${props => !props.readOnly &&
    css`
      &:hover,
      &:focus-within {
        border-color: #007AEB;
      }
    `}
`;

export const ErrorWrapper = styled.div`
  position: absolute;
  top: calc(100% + 0.3em);
  right: 0;
  left: 0;
  font-size: 0.8571428571428571em;
  color: #D43E74;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ErrorText = styled(TextOverflowTooltip)`
  color: #D43E74;
  width: 100%;
`;

export const InputIcon = styled.div`
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CloseIcon = styled(CloseIconS).attrs({ color: '#8F9DAC', width: 10, height: 10 })`
  cursor: pointer;
  margin-top: 3px;
  margin-left: 10px;
  position: ${props => props.type === 'number' ? 'absolute' : ''};
  right: ${props => props.type === 'number' ? '35px' : ''};
`;
