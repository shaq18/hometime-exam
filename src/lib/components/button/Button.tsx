import React from 'react';
import { S } from './style';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: any;
  color?: 'primary' | 'secondary';
  children: React.ReactNode | string;
}

const Button = ({ as, color = 'primary', children, ...props }: ButtonProps) => {
  return (
    <S.Button {...props} color={color} as={as}>
      <span>{children}</span>
    </S.Button>
  );
};

export default Button;
