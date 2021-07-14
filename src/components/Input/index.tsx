import React from 'react';
import './index.css';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = (props: InputProps) => {
  return (
    <input
      className="input"
      id="username"
      type="text"
      placeholder="Username"
      {...props}></input>
  );
};
