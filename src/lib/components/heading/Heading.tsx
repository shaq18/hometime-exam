import React from 'react';
import { S } from './style';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Heading = ({ ...props }) => {
  return <S.Heading {...props} />;
};

export default Heading;
