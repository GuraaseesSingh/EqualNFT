import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Transactions = () => {
  // Sample transaction data; replace with actual data
  const transactions = [
    { id: 1, amount: '0.5 ETH', date: '2024-10-15' },
    { id: 2, amount: '0.2 ETH', date: '2024-10-14' },
  ];

  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold">Recent Transactions</Text>
      {transactions.map(tx => (
        <Text key={tx.id} mt={2}>Amount: {tx.amount} - Date: {tx.date}</Text>
      ))}
    </Box>
  );
};

export default Transactions;
