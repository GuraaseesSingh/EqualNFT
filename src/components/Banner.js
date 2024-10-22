import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import axios from 'axios';

const fetchNFTData = async (contractAddress, tokenId) => {
  const apiKey = 'AChVYoHTHYF8r9zsBibo-8HBwsjFv_Xn';
  const url = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTMetadata`;
  const response = await axios.get(url, {
    params: {
      contractAddress: contractAddress,
      tokenId: tokenId,
    },
  });
  return response.data;
};

fetchNFTData('0x458A9887667B731A599179FC1f428E474B40BB66', '1').then(data => {
  console.log(data);
  // Update your website UI with the NFT data
});



const autoRun = keyframes`
  from {
    transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
  }
  to {
    transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }
`;
const Banner = () => {
  return (
    <Flex
      className="banner"
      width="100%"
      height="100vh"
      textAlign="center"
      position="relative"
      overflow="hidden"
      bgColor="#D2D2D2"
      backgroundImage="
        repeating-linear-gradient(to right, transparent 0 100px, #25283b22 100px 101px),
        repeating-linear-gradient(to bottom, transparent 0 100px, #25283b22 100px 101px)"
    >
      {/* Slider */}
      <Box
        className="slider"
        position="absolute"
        top="10%"
        left="50%"
        transform="translateX(-50%)"
        width="200px"
        height="250px"
        animation={`${autoRun} 20s linear infinite`}
        zIndex={2}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {[...Array(10).keys()].map((i) => (
          <Box
            key={i}
            className="item"
            position="absolute"
            inset="0"
            transform={`rotateY(${(i * (360 / 10))}deg) translateZ(550px)`}
          >
            <Image src={`images/dragon_${i + 1}.png`} alt={`Dragon ${i + 1}`} width="100%" height="100%" objectFit="cover" />
          </Box>
        ))}
      </Box>

      {/* Content */}
      <Flex
        className="content"
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        width="min(1400px, 100vw)"
        height="max-content"
        paddingBottom="100px"
        flexDirection="column"
        alignItems="center"
        zIndex={1}
      >
        <Heading data-content="CSS ONLY" fontSize={["5em", "7em", "16em"]} lineHeight="1em" color="#25283B">
          EQUAL NFT
          <Box
            position="absolute"
            inset="0"
            content="attr(data-content)"
            zIndex={2}
            textShadow="0 0 2px #d2d2d2"
            color="transparent"
            fontSize="inherit"
            fontWeight="bold"
          />
        </Heading>

        <Box className="author" textAlign="center" maxWidth="200px" mt={4}>
          <Text fontSize="3em" fontFamily="'Poppins', sans-serif"></Text>
          <Text fontFamily="'Poppins', sans-serif" fontWeight="bold">Web Design</Text>
          <Text fontFamily="'Poppins', sans-serif">Subscribe to the channel to watch many interesting videos</Text>
        </Box>

        <Box
          className="model"
          backgroundImage="url(images/model.png)"
          width="100%"
          height="75vh"
          position="absolute"
          bottom="0"
          left="0"
          backgroundSize="auto 130%"
          backgroundRepeat="no-repeat"
          backgroundPosition="top center"
          zIndex={1}
        />
      </Flex>
    </Flex>
  );
};

export default Banner;
