import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Wallet = () => {
  // Sample wallet data; replace with your actual data fetching logic
  const walletData = {
    balance: '3.2 ETH',
    usdValue: '$5,000',
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold">Wallet Overview</Text>
      <Text mt={2}>Balance: {walletData.balance}</Text>
      <Text>Value (USD): {walletData.usdValue}</Text>
    </Box>
  );
};

export default Wallet;
