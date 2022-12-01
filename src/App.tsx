import { ThemeProvider } from 'styled-components';

import { Router } from './components/Router';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartProvider>
        <Router />
      </ShoppingCartProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
