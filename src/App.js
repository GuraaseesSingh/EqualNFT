import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Contributions from './components/Contributions';
import Banner from './components/Banner';
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import Staking from './components/Staking';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* Route for HomePage */}
          <Route path="/" element={<HomePage />} />

          {/**route for register form */}
          <Route path="/register" element={<RegisterForm />} />

          {/* Route for LoginForm */}
          <Route path="/login" element={<LoginForm />} />

          {/* Route for Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contributions" element={<Contributions />} /> {/* New Contributions Page */}
          <Route path="/banner" element={<Banner />} />
          <Route path="/staking" element={<Staking />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

