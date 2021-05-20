import React from 'react';
import { S } from './style';

export interface TextProps {
  as?: any;
  size?: string;
  weight?: string | number;
  subTitle?: boolean;
  children: React.ReactNode;
}

const Text = ({ as, size, subTitle, weight, ...props }: TextProps) => {
  return <S.Text as={as} size={size} subTitle={subTitle} weight={weight} {...props} />;
};

export default Text;
