import React, { useState, useEffect } from 'react';
import { Box, Text, Progress, VStack, Heading } from '@chakra-ui/react';

const Contributions = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const storedStartTime = Date.now();
    setStartTime(storedStartTime);

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const timeElapsed = (currentTime - storedStartTime) / 1000;
      setTimeSpent(timeElapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg="#1a202c" minH="100vh" p={6} color="white">
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Your Contributions
      </Heading>

      <Box bg="#2d3748" p={6} borderRadius="md" shadow="md">
        <Heading as="h2" size="lg" mb={4}>Campaign: Save the Oceans</Heading>
        <Text mb={4}>Track your contributions to the campaign below:</Text>

        <VStack spacing={4} align="stretch">
          <Box>
            <Text mb={2}>Task 1: Clean Beach A (Completed)</Text>
            <Progress value={100} size="lg" colorScheme="teal" />
          </Box>
          <Box>
            <Text mb={2}>Task 2: Clean Beach B (In Progress)</Text>
            <Progress value={50} size="lg" colorScheme="orange" />
          </Box>
          <Box>
            <Text mb={2}>Task 3: Clean Beach C (New)</Text>
            <Progress value={10} size="lg" colorScheme="red" />
          </Box>
        </VStack>
      </Box>

      <Box mt={8} bg="#2d3748" p={6} borderRadius="md" shadow="md">
        <Heading as="h3" size="md" mb={4}>Your Contribution</Heading>
        <Text>Total Time Contributed: {timeSpent.toFixed(0)} seconds</Text>
      </Box>
    </Box>
  );
};

export default Contributions;
