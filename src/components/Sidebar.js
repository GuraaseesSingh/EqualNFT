import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Collapse,
  Text,
  VStack,
  useDisclosure,
  Switch,
} from '@chakra-ui/react';
import { FaHome, FaWallet, FaBitcoin, FaEthereum, FaCog, FaInfoCircle, FaInbox, FaHeart } from 'react-icons/fa';
import { BsCoin } from 'react-icons/bs';

const Sidebar = () => {
  const { isOpen: walletOpen, onToggle: toggleWallet } = useDisclosure();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Box
      height="100vh"
      width="250px"
      p={5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      bg={darkMode ? 'gray.900' : 'gray.200'}
      transition="background-color 0.5s"
    >
      {/* Top Section */}
      <VStack spacing={5} align="stretch">
        {/* Dashboard Button */}
        <Button
          leftIcon={<FaHome />}
          colorScheme={darkMode ? 'purple' : 'blue'}
          variant="solid"
          borderRadius="lg"
          color={darkMode ? 'white' : 'black'} // Bright text color for dark mode
        >
          Dashboard
        </Button>

        {/* Other Menu Items */}
        <VStack spacing={3} align="stretch">
          <Button variant="ghost" leftIcon={<FaInbox />} colorScheme={darkMode ? 'gray' : 'gray'} color={darkMode ? 'white' : 'black'}>
            Airdrops
          </Button>
          <Button variant="ghost" leftIcon={<FaInbox />} colorScheme={darkMode ? 'gray' : 'gray'} color={darkMode ? 'white' : 'black'}>
            Inbox
          </Button>
          <Button variant="ghost" leftIcon={<FaHeart />} colorScheme={darkMode ? 'gray' : 'gray'} color={darkMode ? 'white' : 'black'}>
            Favourites
          </Button>
        </VStack>

        {/* Wallet Section */}
        <Box mt={10}>
          <Button
            width="full"
            variant="ghost"
            leftIcon={<FaWallet />}
            onClick={toggleWallet}
            justifyContent="space-between"
            colorScheme={darkMode ? 'gray' : 'gray'}
            color={darkMode ? 'white' : 'black'}
          >
            Wallets
            <Text color={darkMode ? 'white' : 'black'}>{walletOpen ? '▲' : '▼'}</Text>
          </Button>

          {/* Wallet Dropdown */}
          <Collapse in={walletOpen}>
            <VStack spacing={3} mt={3} align="stretch">
              <Button variant="ghost" leftIcon={<FaBitcoin />} colorScheme="yellow" color={darkMode ? 'white' : 'black'}>
                Bitcoin
              </Button>
              <Button variant="ghost" leftIcon={<FaEthereum />} colorScheme={darkMode ? 'gray' : 'gray'} color={darkMode ? 'white' : 'black'}>
                Ethereum
              </Button>
              <Button variant="ghost" leftIcon={<BsCoin />} colorScheme="blue" color={darkMode ? 'white' : 'black'}>
                USD Coin
              </Button>
            </VStack>
          </Collapse>
        </Box>
      </VStack>

      {/* Bottom Section */}
      <VStack spacing={5} align="stretch">
        <Button variant="ghost" leftIcon={<FaCog />} colorScheme={darkMode ? 'gray' : 'gray'} color={darkMode ? 'white' : 'black'}>
          Settings
        </Button>
        <Button variant="ghost" leftIcon={<FaInfoCircle />} colorScheme={darkMode ? 'gray' : 'gray'} color={darkMode ? 'white' : 'black'}>
          Help & FAQ
        </Button>

        {/* Dark Mode Toggle */}
        <Flex align="center" justify="space-between">
          <Text color={darkMode ? 'white' : 'black'}>Dark mode</Text>
          <Switch isChecked={darkMode} onChange={() => setDarkMode(!darkMode)} colorScheme="purple" />
        </Flex>
      </VStack>
    </Box>
  );
};

export default Sidebar;
