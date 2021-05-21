import { useTheme } from '@emotion/react';
import React from 'react';
import { S } from './style';

const ToggleButton = () => {
  const { darkMode, setDarkMode }: any = useTheme();
  const icon = {
    light: '/assets/icons/sun.svg',
    dark: '/assets/icons/moon.svg',
  };

  return (
    <S.ToggleButton onClick={() => setDarkMode(!darkMode)}>
      <S.Indicator darkMode={darkMode}>
        <img src={darkMode ? icon.dark : icon.light} alt="" height="18" />
      </S.Indicator>
    </S.ToggleButton>
  );
};

export default ToggleButton;
