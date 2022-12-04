import { ThemeProvider } from 'styled-components';

import { Router } from './components/Router';
import { CheckoutProvider } from './contexts/CheckoutContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartProvider>
        <CheckoutProvider>
          <Router />
        </CheckoutProvider>
      </ShoppingCartProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
