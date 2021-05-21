import React from 'react';
import { S } from './style';

const Loader = () => {
  return (
    <S.Loader>
      <S.Ripple>
        <div></div>
        <div></div>
      </S.Ripple>
    </S.Loader>
  );
};

export default Loader;
