import * as React from 'react';
import { ReactNode } from "react";
import * as Styled from './styles';
import { isBoolean } from 'lodash';
import ErrorIcon from 'assets/icons/ErrorIcon';

type IconPositionType = 'left' | 'right';

interface Props {
  id?: string;
  name?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value?: null | string | number;
  readOnly?: boolean;
  inline?: boolean;
  type?: string;
  icon?: ReactNode;
  iconPosition?: IconPositionType;
  ref?: React.RefObject<HTMLElement>;
  refInput?: React.MutableRefObject<HTMLElement>;
  onChange?(e?: React.ChangeEvent<HTMLInputElement>): void;
  onClick?(e?: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(e?: React.ChangeEvent<HTMLInputElement>): void;
  labelStyle?: object,
  inputStyle?: object,
  inputWrapperStyle?: object,
  [prop: string]: any;
  errors?: { [name: string]: string };
  wrapperStyle?: object,
  errorWrapperStyle?: object,
  inputClassName?: string;
  mask?: string;
  required?: boolean;
  onCancel?: () => void;
  showCloseIcon?: boolean;
  isNumberFormatInput?: boolean;
  decimalScale?: number;
  thousandSeparator?: string;
  allowNegative?: boolean;
  errorActive?: boolean;
}

export default function Input({id, name, ref, refInput, iconPosition, className, label, readOnly, placeholder, value,
                                icon, type, onChange, onClick, labelStyle, inputStyle, inputWrapperStyle, inline,
                                onBlur, errors, wrapperStyle, errorWrapperStyle, inputClassName, mask, required, onCancel, showCloseIcon = false, isNumberFormatInput, decimalScale, thousandSeparator, allowNegative, errorActive,
                               ...props}: Props) {
  const error = name && errors && errors[name];

  const setInputRef = (element) => {
    if(refInput && !refInput.current){
      refInput.current = element;
    }
  };

  return (
    <Styled.Label inline={inline} ref={ref} className={className} htmlFor={id} {...props}>
      <Styled.InputLabel inline={inline} style={labelStyle}>{label}{required ? '*' : ''}</Styled.InputLabel>
      <Styled.Wrapper style={wrapperStyle}>
        <Styled.InputWrapper icon={!!icon} iconPosition={'right'} inline={inline} style={inputWrapperStyle} error={error || errorActive} readOnly={readOnly}>
          { icon && <Styled.InputIcon> {icon} </Styled.InputIcon> }
          { showCloseIcon && value && onCancel && <Styled.CloseIcon type={type} onClick={onCancel} /> }
          {
            isNumberFormatInput
              ? <Styled.NumberFormatInput
                  onClick={onClick}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  value={value ?? ''}
                  readOnly={readOnly}
                  decimalScale={decimalScale}
                  thousandSeparator={thousandSeparator}
                  allowNegative={allowNegative}
                />
              : <Styled.Input
                  style={inputStyle}
                  onClick={onClick}
                  onChange={onChange}
                  onBlur={onBlur}
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={value ?? ''}
                  inputRef={(el) => setInputRef(el)}
                  readOnly={readOnly}
                  className={inputClassName}
                  mask={mask}
                />
          }
        </Styled.InputWrapper>
        {error && !isBoolean(error) &&
        <Styled.ErrorWrapper style={errorWrapperStyle}>
          <ErrorIcon width={12} height={12} style={{flexShrink: 0, marginRight: '5px'}}/>
          <Styled.ErrorText
            text={error}
            width='300px'
            position='bottom'
            tooltipId={name}
          />
        </Styled.ErrorWrapper>
        }
      </Styled.Wrapper>
  </Styled.Label>
);
}

