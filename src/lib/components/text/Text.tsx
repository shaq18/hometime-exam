import React from 'react';
import { S } from './style';

export interface TextProps {
  align?: 'left' | 'center' | 'right';
  as?: any;
  lineHeight?: string;
  size?: string;
  weight?: string | number;
  subTitle?: boolean;
  children: React.ReactNode;
}

const Text = ({ align, as, lineHeight, size, subTitle, weight, ...props }: TextProps) => {
  return (
    <S.Text
      align={align}
      as={as}
      size={size}
      subTitle={subTitle}
      weight={weight}
      lineHeight={lineHeight}
      {...props}
    />
  );
};

export default Text;
