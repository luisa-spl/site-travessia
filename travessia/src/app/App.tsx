import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../assets/styles/theme';
import MainRoutes from './routes'
import { CookiesConsentment } from 'components/CookieModal';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <MainRoutes />
          <CookiesConsentment />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
