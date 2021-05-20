import { css, Global, ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import Button from './lib/components/button/Button';
import { CardInfo } from './lib/ui/card-info';
import { Header } from './lib/ui/header';
import Loader from './Loader';
import './styles/index.css';
import { darkTheme, lightTheme } from './theme/colors';

const getRandomCard = () => {
  // fill this in
};

const App = () => {
  const [state, setState] = useState({
    loading: false,
    card: {},
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    getRandomCard();
  }, []);

  return (
    <ThemeProvider theme={{ colors: darkMode ? darkTheme : lightTheme, darkMode, setDarkMode }}>
      <Global
        styles={css`
          body {
            background-color: ${darkMode ? '#202021' : '#F5F5FA'};
            transition: background-color 0.3s ease-out;
          }
        `}
      />
      <Header />
      <Loader />
      {/* <Card /> */}
      <CardInfo />
      {/* ---- components to implement ----- */}
      <Button onClick={() => setDarkMode(!darkMode)}>Hello</Button>
    </ThemeProvider>
  );
};

export default App;
