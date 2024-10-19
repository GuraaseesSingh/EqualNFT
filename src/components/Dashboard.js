import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar"; // We will create this component next
import Wallet from "./Wallet"; // We will create this component
import FeaturedNFTs from "./FeaturedNFTs"; // We will create this component
import Transactions from "./Transactions"; // We will create this component
import Header from "./Header";
import TopContributors from "./TopContributors";

const Dashboard = () => {
  return (
    <Grid templateColumns="250px 1fr" gap={6}>
      {/* Sidebar */}
      <GridItem>
        <Sidebar />
      </GridItem>

      {/* Main Content */}
      <GridItem gridGap={3}>
        <Header />
        <Box padding={6}>
          {/* Row for Top Contributors and Wallet */}
          <Grid templateColumns="1.5fr 1fr" gap={4} mb={6}>
            <GridItem>
              <TopContributors />
            </GridItem>
            <GridItem>
              <Wallet />
            </GridItem>
          </Grid>

          {/* Other Components */}
          <FeaturedNFTs />
          <Transactions />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
