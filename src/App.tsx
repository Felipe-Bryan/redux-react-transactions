import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import GlobalStyles from './config/GlobalStyles';
import defaultTheme from './config/theme/defaultTheme';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
