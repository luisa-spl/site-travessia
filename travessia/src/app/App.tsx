import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../assets/styles/theme';
import MainRoutes from './routes'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <MainRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
