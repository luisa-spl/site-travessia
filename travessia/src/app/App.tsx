import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MainRoutes from './routes'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
          <MainRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
