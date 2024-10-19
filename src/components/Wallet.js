import React from "react";
import { Box, Text, Select } from "@chakra-ui/react";

const Wallet = () => {
  // Sample wallet data; replace with your actual data fetching logic
  const walletData = {
    balance: "3.2 ETH",
    usdValue: "$5,000",
  };

  return (
    <Box
      color={"white"}
      p={10}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      width="fit-content"
    >
      <Text fontSize="4xl" fontWeight="bold" color={"white"}>
        Wallet Overview
      </Text>
      <Text mt={2} color={"#A2A3A4"}>
        Balance: {walletData.balance}
      </Text>
      <Text color={"#A2A3A4"}>Value (USD): {walletData.usdValue}</Text>

      {/* Dropdown Button */}
      <Select
        mt={4}
        color={"white"}
        bg={"transparent"} // Make it transparent to fit the theme
        borderColor={"#A2A3A4"} // Change the border color if needed
        width="fit-content"
      >
        <option style={{ backgroundColor: 'black', color: 'white' }} value="bitcoin">Bitcoin</option>
        <option style={{ backgroundColor: 'black', color: 'white' }} value="ethereum">Ethereum</option>
        <option style={{ backgroundColor: 'black', color: 'white' }} value="usd_coin">USD Coin</option>
      </Select>
    </Box>
  );
};

export default Wallet;
