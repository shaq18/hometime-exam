import React from 'react';
import { ToggleButton } from '../../components/toggle-button';
import { Logo } from '../logo';
import { S } from './style';

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <ToggleButton />
    </S.Header>
  );
};

export default Header;
