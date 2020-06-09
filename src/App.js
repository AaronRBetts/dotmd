import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import MDPreviewer from './components/MDPreviewer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme.js';
import { GlobalStyles } from './styles/global.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faStar } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.getElementById('star').style.display = 'none';
    } else {
      setTheme('light')
      document.getElementById('star').style.display = 'initial';
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="wrapper">
        <button id="themeBtn" className="btn" onClick={toggleTheme}>
          <FontAwesomeIcon id="star" icon={faStar} />
          <FontAwesomeIcon id="moon" icon={faMoon} />
        </button>
        <Header />
        <MDPreviewer />
      </div>
    </ThemeProvider>
  );
}

export default App;