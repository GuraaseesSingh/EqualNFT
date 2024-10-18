import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './components/Dashboard'; // Ensure you have this component created

function App() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
