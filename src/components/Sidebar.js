import { VStack, Text, Button } from '@chakra-ui/react'; // Removed Box and Icon
import { FaEthereum, FaBitcoin } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <VStack spacing={4} align="start" bg="gray.900" padding={4} height="100vh" color="white">
      <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>
      <Button leftIcon={<FaBitcoin />} colorScheme="yellow" variant="outline">Bitcoin</Button>
      <Button leftIcon={<FaEthereum />} colorScheme="blue" variant="outline">Ethereum</Button>
      <Button variant="outline">USD Coin</Button>
      {/* Add other sidebar items */}
    </VStack>
  );
};

export default Sidebar;
