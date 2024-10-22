import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation
  const toast = useToast(); // Chakra UI toast for notifications

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
      });

      // Show success message
      toast({
        title: response.data.message,
        status: response.data.success ? 'success' : 'error',
        duration: 5000,
        isClosable: true,
      });

      // Redirect to the sidebar on successful registration
      if (response.data.success) {
        navigate('/dashboard');
      }
    } catch (error) {
      toast({
        title: 'Error registering user',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <form onSubmit={handleSubmit}>
        <Box
          bg="white"
          boxShadow="md"
          borderRadius="lg"
          p={8}
          width="sm"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Register</Text>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
            >
              Register
            </Button>
          </VStack>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
