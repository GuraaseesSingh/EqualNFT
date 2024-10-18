import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import Sidebar from './Sidebar'; // We will create this component next
import Wallet from './Wallet'; // We will create this component
import FeaturedNFTs from './FeaturedNFTs'; // We will create this component
import Transactions from './Transactions'; // We will create this component

const Dashboard = () => {
  return (
    <Grid templateColumns="250px 1fr" gap={6}>
      {/* Sidebar */}
      <GridItem>
        <Sidebar />
      </GridItem>
      
      {/* Main Content */}
      <GridItem>
        <Box padding={6}>
          <Wallet />
          <FeaturedNFTs />
          <Transactions />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
