import { useTheme } from '@emotion/react';
import React from 'react';
import { S } from './style';

const Logo = () => {
  const { darkMode }: any = useTheme();

  const logoType = {
    light: '/assets/branding/mtg-logo-black.png',
    dark: '/assets/branding/mtg-logo-white.png',
  };

  return (
    <div>
      <S.Logo src={darkMode ? logoType.dark : logoType.light} alt="Magic The Gathering Logo" />
    </div>
  );
};

export default Logo;
