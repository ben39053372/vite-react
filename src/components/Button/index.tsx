import './index.css';
import React from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;
  return <button className={`button ${className}`} {...rest}></button>;
};
