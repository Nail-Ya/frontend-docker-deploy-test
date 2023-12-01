import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from "styled-components/macro";

const Container = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: ${({width}) => width};
`;

interface Props {
  text: string;
  width?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  multiline?: boolean;
  tooltipWith?: string;
  tooltipId?: string;
  tooltipText?: string;
}

const TextOverflowTooltip = ({ text, width, position, multiline, tooltipWith = '300px', tooltipId = 'text', tooltipText, ...rest } : Props) => {
  const [overflowActive, setOverflowActive] = useState(false);
  const [renderTooltip, setRenderTooltip] = useState(false);
  const ref = useRef();

  const isOverflowActive = useCallback((element?: HTMLDivElement) => {
    if(!element) return false
    return element.offsetWidth < element.scrollWidth;
  }, []);

  useEffect(() => {
    if(!text) return
    setOverflowActive(isOverflowActive(ref.current))
  }, [isOverflowActive, text]);

  const tooltipTextValue = tooltipText ? tooltipText : text;
  const tooltipString = multiline ? `<div style="width: ${tooltipWith}; white-space: pre-wrap; word-break: keep-all;">${tooltipTextValue}</div>` : tooltipTextValue;

  return (
    <Container
      data-for={tooltipId}
      data-html={multiline}
      data-tip={overflowActive ? tooltipString : ''}
      data-type='light'
      ref={ref}
      width={width}
      onMouseEnter={() => !renderTooltip && setRenderTooltip(true)}
      {...rest}
    >
      {text}
      {overflowActive && text && renderTooltip &&
      <ReactTooltip
        delayShow={100}
        delayUpdate={100}
        place={position}
        border
        borderColor={'#BFDDF9'}
        id={tooltipId}
      />}
    </Container>
  )
}

export default TextOverflowTooltip;
