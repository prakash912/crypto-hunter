import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from './CryptoContext';
import { createTheme, ThemeProvider } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme();
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CryptoContext>
        <App />
      </CryptoContext>
    </React.StrictMode>
  </ThemeProvider>
);

