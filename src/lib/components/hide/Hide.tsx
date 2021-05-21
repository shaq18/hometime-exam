import React from 'react';
import { S } from './style';

export interface HideProps {
  hide: boolean;
  children: React.ReactNode;
}

const Hide = ({ hide, children }: HideProps) => {
  return <S.Hide hide={hide}>{children}</S.Hide>;
};

export default Hide;
