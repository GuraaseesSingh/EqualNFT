import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  Text,
  Button,
  Input,
  Switch,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = () => {
  const navigate = useNavigate(); // useNavigate should be called inside the component

  const handleButtonClick = () => {
    navigate('/deagentAI'); // Navigate to the /deagentAI route
  };

  // Dummy data for contributed projects
  const projects = [
    { projectName: "DeagentAI", onClick: handleButtonClick }, // Fix onClick syntax
    { projectName: "Humanity Protocol" },
    { projectName: "Nexus" },
  ];

  // Dummy data for top contributors
  const contributor = [
    {
      personname: "Asees Singh",
      totalContribution: "350 USDT",
      campaignsParticipated: 3,
      timeConnected: "10h 30m",
    },
  ];

  // State for showing time connected
  const [showTime, setShowTime] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      color={"white"}
      p={10}
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
      bgGradient="linear(to-r, #1e3a8a, #1e40af)" // Dark theme colors
      margin="0 auto"
      maxW="1000px"
      textAlign="center"
    >
      {/* Search Bar */}
      <Input
        placeholder="Search campaigns..."
        size="lg"
        mb={6}
        bg="white"
        color="black"
        _placeholder={{ color: "gray.500" }}
      />

      {/* Explore Button */}
      <Button
        backgroundColor="teal.500"
        color="white"
        borderRadius={10}
        mb={6}
        onClick={() => alert("Exploring more campaigns...")}
      >
        Explore More Campaigns
      </Button>

      {/* Projects User is Contributing To */}
      <Box mb={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Your Contributed Projects
        </Text>
        <VStack spacing={4}>
          {projects.map((project, index) => (
            <Box
              key={index}
              p={5}
              borderWidth={1}
              borderRadius="lg"
              width="100%"
              textAlign="left"
              bg="white"
              color="black"
              cursor={project.onClick ? 'pointer' : 'default'}
              onClick={project.onClick}
            >
              <Text fontSize="xl" fontWeight="bold">
                {project.projectName}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Top Contributors Section */}
      <Box
        p={10}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        width="fit-content"
        margin="0 auto"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
      >
        <Text
          style={{ marginBottom: "20px", marginTop: "0px" }}
          fontSize="4xl"
          fontWeight="bold"
          color={"white"}
          mb={2}
        >
          Top Contributors
        </Text>

        {/* Toggle Button to Show Time Connected */}
        <Flex justifyContent="center" alignItems="center" mb={6}>
          <Text fontSize="lg" mr={2}>
            Show Time Connected
          </Text>
          <Switch
            size="lg"
            isChecked={showTime}
            onChange={() => setShowTime(!showTime)}
            colorScheme="teal"
          />
        </Flex>

        {/* Contributors Details */}
        <Flex alignItems="center" justifyContent="center">
          <Box
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={100}
            height={100}
            fill={"white"}
            mr={4}
          >
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
          </Box>
          <Flex direction="column" textAlign="left">
            {contributor.map((tc, index) => (
              <Box key={index} mb={2}>
                <Text fontSize="xl" fontWeight="bold" color={"white"}>
                  Name: {tc.personname}
                </Text>
                <Text color={"white"}>Total Contribution: {tc.totalContribution}</Text>
                <Text color={"white"}>Campaigns Participated: {tc.campaignsParticipated}</Text>
                {showTime && (
                  <Text color={"white"}>Time Connected: {tc.timeConnected}</Text>
                )}
              </Box>
            ))}

            {/* Buttons for Viewing Rewards and Collection */}
            <ButtonGroup variant="outline" spacing="6" mt={4}>
              <Button backgroundColor="white" color="black" borderRadius={10}>
                View Rewards
              </Button>
              <Button colorScheme="white" borderRadius={10}>
                View Collection
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>

      {/* Dark/Light Mode Toggle */}
      <Button
        mt={6}
        onClick={toggleColorMode}
        colorScheme="teal"
        borderRadius={10}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </Box>
  );
};

export default Dashboard;
