import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Text, Box, Image, Button } from "@chakra-ui/react";

const HomePage = () => {
  const navigate = useNavigate();

  const handleloginClick = () => {
    navigate("/login");
  };

  return (
    <div className="hero-home-page">
      <Header />

      {/* Center the text and increase the size */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        textAlign="center"
        color="white"
      >
        <Box position="absolute" bottom={0} boxSize={"10xl"} overflow="hidden">
          <Image
            src="Looper BG.png"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
        <Text fontSize="6xl" mb={4}>
          Welcome to EqualNFT
        </Text>

        {/* Button below the text */}
        <Button onClick={handleloginClick} colorScheme="blue" size="lg">
          Register Here
        </Button>

        {/* Image at the bottom */}
      </Box>
    </div>
  );
};

export default HomePage;
