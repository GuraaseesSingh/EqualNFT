import React from "react";
import { Box, ButtonGroup, Flex, Text, Button } from "@chakra-ui/react";

const TopContributors = () => {
  const contributor = [{ personname: "Asees Singh", pricepernft: "80" }];

  return (
    <Box
      color={"white"}
      p={10}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      width= "fit-content"
      bgGradient='linear(to-l, #7928CA, #FF0080)'
    >
      <Text style={{marginBottom:'20px', marginTop:'0px'}}fontSize="4xl" fontWeight="bold" color={"white"} mb={2}>
        Top Contributors
      </Text>
      <Flex alignItems={"center"}>
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={300}
          height={200}
          fill={"white"}
          mr={4} // Margin to the right of the icon
        >
          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
        </Box>
        <Flex direction="column">
          {contributor.map((tc, index) => (
            <Box key={index} mb={2}>
              <Text color={"white"} fontWeight="bold" fontSize={"xl"}>
                Name: {tc.personname}
              </Text>
              <Text color={"white"}>Price per NFT: {tc.pricepernft}</Text>
            </Box>
          ))}

          <Box mt={2}>
            {" "}
            {/* Margin top for spacing between text and buttons */}
            <ButtonGroup variant="outline" spacing="6">
              <Button
                backgroundColor={"white"}
                color={"black"}
                borderRadius={10}
              >
                View Rewards
              </Button>
              <Button colorScheme="white" borderRadius={10}>
                View Collection
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopContributors;
