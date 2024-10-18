import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FeaturedNFTs = () => {
  // Sample NFT data; replace with actual data
  const nfts = [
    { id: 1, title: 'Cool NFT #1', price: '1.0 ETH' },
    { id: 2, title: 'Cool NFT #2', price: '0.8 ETH' },
  ];

  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold">Featured NFTs</Text>
      {nfts.map(nft => (
        <Text key={nft.id} mt={2}>{nft.title} - Price: {nft.price}</Text>
      ))}
    </Box>
  );
};

export default FeaturedNFTs;
