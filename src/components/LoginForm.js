import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (response.data.success) {
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard'); // Redirect to the Sidebar component
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <Flex justify="center" align="center" height="100vh">
      <Box
        bg="white"
        p={8}
        rounded="lg"
        shadow="md"
        width="96"
      >
        <VStack as="form" spacing={6} onSubmit={handleSubmit}>
          <Heading as="h1" size="lg">Login</Heading>
          {error && <Text color="red.500">{error}</Text>}

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              focusBorderColor="blue.500"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              focusBorderColor="blue.500"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            width="full"
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LoginForm;
