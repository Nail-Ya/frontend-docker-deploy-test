import * as React from 'react';

interface Props {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  [props: string]: any;
}

export default function ErrorIcon({width = 20, height = 20, className, color = '#D43E74', ...props}: Props) {
  return (
    <svg className={className} width={width} height={height} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 5C10.55 5 11 5.45 11 6V10C11 10.55 10.55 11 10 11C9.45 11 9 10.55 9 10V6C9 5.45 9.45 5 10 5ZM9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM11 15H9V13H11V15Z" fill={color} />
    </svg>
  );
}
