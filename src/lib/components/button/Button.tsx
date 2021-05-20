import { useTheme } from '@emotion/react';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
}

const Button = ({ color = 'primary', ...props }: ButtonProps) => {
  const { colors }: any = useTheme();

  return <button {...props} />;
};

export default Button;
