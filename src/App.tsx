import { css, Global, ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import { CardInfo } from './lib/ui/card-info';
import { Header } from './lib/ui/header';
import './styles/index.css';
import { darkTheme, lightTheme } from './theme/colors';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={{ colors: darkMode ? darkTheme : lightTheme, darkMode, setDarkMode }}>
      <Global
        styles={css`
          body {
            background-color: ${darkMode ? '#202021' : '#F5F5FA'};
          }
        `}
      />
      <Header />
      <CardInfo />
    </ThemeProvider>
  );
};

export default App;
