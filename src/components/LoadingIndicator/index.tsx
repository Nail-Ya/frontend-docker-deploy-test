import * as React from 'react';
import Circle from './Circle';
import Wrapper from './Wrapper';

interface Props {
  className?: string;
  color?: string;
}

const LoadingIndicator = ({className, color = '#999'}: Props) => (
  <Wrapper className={className}>
    <Circle color={color} />
    <Circle color={color} rotate={30} delay={-1.1} />
    <Circle color={color} rotate={60} delay={-1} />
    <Circle color={color} rotate={90} delay={-0.9} />
    <Circle color={color} rotate={120} delay={-0.8} />
    <Circle color={color} rotate={150} delay={-0.7} />
    <Circle color={color} rotate={180} delay={-0.6} />
    <Circle color={color} rotate={210} delay={-0.5} />
    <Circle color={color} rotate={240} delay={-0.4} />
    <Circle color={color} rotate={270} delay={-0.3} />
    <Circle color={color} rotate={300} delay={-0.2} />
    <Circle color={color} rotate={330} delay={-0.1} />
  </Wrapper>
);

export default LoadingIndicator;
