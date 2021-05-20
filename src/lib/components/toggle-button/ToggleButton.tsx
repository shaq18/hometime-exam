import { useTheme } from '@emotion/react';
import React from 'react';
import { S } from './style';

const ToggleButton = () => {
  const { darkMode, setDarkMode }: any = useTheme();
  return (
    <S.ToggleButton onClick={() => setDarkMode(!darkMode)}>
      <S.Indicator />
    </S.ToggleButton>
  );
};

export default ToggleButton;
