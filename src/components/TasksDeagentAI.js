import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  Icon,
  Collapse,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';

const TaskCard = ({ task }) => {
  const { isOpen, onToggle } = useDisclosure(); // Hook to handle the collapse
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompleteTask = () => {
    setIsCompleted(true);
  };

  // Dynamically handle steps with images
  const steps = task.steps.instructions;

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bg="gray.800"
      color="white"
      cursor="pointer"
      onClick={onToggle} // Clicking the entire box toggles the details
    >
      {/* Task header */}
      <VStack align="start">
        <Text fontSize="xl" fontWeight="bold">
          {task.title}
        </Text>
        <Text>Estimated Time: {task.estimatedTime}</Text>
        <Text>Estimated Cost: {task.estimatedCost}</Text>
        <Text>Reward: {task.reward}</Text>
      </VStack>

      {/* Collapsible task steps */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} p={4} bg="gray.700" borderRadius="md">
          <Text fontSize="md" fontWeight="semibold">
            Step 1: {task.steps.stepTitle}
          </Text>
          <Text mt={2}>
            - Visit{' '}
            <Text as="span" color="blue.300" textDecoration="underline">
              {task.steps.visitLinkText}
            </Text>
          </Text>
          <Text>- {task.steps.connectWallet}</Text>

          {/* Dynamically render all steps */}
          {steps.map((step, index) => (
            <VStack key={index} align="start" mt={4}>
              <Text>- {step.description}</Text>
              {step.image && (
                <Image
                  src={step.image}
                  alt={`Step ${index + 1} image`}
                  borderRadius="md"
                  mt={2}
                  maxH="200px"
                />
              )}
            </VStack>
          ))}

          {/* Mark as Completed Button */}
          <Button
            mt={4}
            colorScheme={isCompleted ? 'green' : 'blue'}
            onClick={(e) => {
              e.stopPropagation(); // Prevent collapsing when marking as completed
              handleCompleteTask();
            }}
            isDisabled={isCompleted}
            leftIcon={<Icon as={FaWallet} />}
          >
            {isCompleted ? 'Task Completed' : 'Mark as Completed'}
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

const tasks = [
  {
    title: "Task 1: Galxe Quests",
    estimatedTime: "<5 min",
    estimatedCost: "Free",
    reward: "Points",
    steps: {
      stepTitle: "Complete Galxe Quests",
      visitLinkText: "Galxe Quest page",
      connectWallet: "Connect Wallet",
      instructions: [
        { description: "Follow the instructions and complete all the tasks" },
        { description: "Mark as Completed" },
      ],
    },
  },
  {
    title: "Task 2: Join Deagent.AI and Invite Friends",
    estimatedTime: "<5 min",
    estimatedCost: "Free",
    reward: "Potential Airdrops",
    steps: {
      stepTitle: "Join Deagent.AI and Invite Friends",
      visitLinkText: "Deagent.AI",
      connectWallet: "Connect Wallet",
      instructions: [
        {
          description:
            "Click the wallet button on the navbar of DeagentAI, you can find the button 'Profile'",
        },
        { description: "Use the referral code or referral link to invite friends" },
      ],
    },
  },
  {
    title: "Task 3: Participate in DeAgentAI’s Community-Incubated AI Model AlphaX",
    estimatedTime: "<10 min",
    estimatedCost: "< 10 USDT",
    reward: "Potential Airdrops",
    steps: {
      stepTitle: "Get Gas Token $Bitlayer_BTC",
      visitLinkText: "Bitlayer Bridge",
      connectWallet: "Connect Wallet",
      instructions: [
        {
          description: "Bridge BTC to Bitlayer",
          image: "https://cdn.galxe.com/galaxy/bf2ab3df04ac4bfdb797447d180f9f63/.png_thumbnail.webp", // Add the image URL for this step
        },
        {
          description: "Step 2: Join AlphaX and Daily Check in",
        },
        {
          description: "Visit AlphaX DAPP",
        },
        { description: "Click button “Daily Cook”",
          image: "https://cdn.galxe.com/galaxy/73c610af0bbe48a78e7d34f0ca5317d2/.png_thumbnail.webp",
        },
        

        {
          description: "Step 3: Participate in AlphaX Predict Market",
        },
        {
          description: "Stay on AlphaX DAPP",
        },
        { description: "Click button ”MARKET“ on the navbar”",
        },
        { description: "In the MARKETS tab, you can participate in predict market about the “price of BTC / ETH”",
        },
        { description: "You can click the button “BTC” or “ETH” to switch the predict target",
        },
        { description: "You can make predictions about the future price trends of BTC or ETH",
        },
        { description: "Click button “Predict” to participate in, and you will jump into a new page",
          image: "https://cdn.galxe.com/galaxy/b95ba7f1e3ae45a39b7caa6a2a8c8e11/.png_thumbnail.webp",
        },
        { description: "Click button “I TRUST” or “I DON’T” to make your decision base on the Prediction Price",
        },
        { description: "Sign and pay the gas fee in your wallet",
          image: "https://cdn.galxe.com/galaxy/9af845a9abf24c8e8d86e497d63957dd/.png_thumbnail.webp",
        },

        
        { description: "Step 4: Participate in AlphaX Reward",
        },
        { description: "Stay on AlphaX DAPP",
        },
        { description: "Click button ”REWARD“ on the navbar",
        },
        { description: "Follow the prompts and complete social tasks in the “Basic Tasks” section",
        },
        { description: "Click the button “Invite Friends” to get the referral link and invite friends",
          image: "https://cdn.galxe.com/galaxy/4e92f1529e2b4f6c9004aa1d8a9d9970/.png_thumbnail.webp",
        },

        { description: "Step 5: Participate in AlphaX OOOO Bridge",
        },
        { description: "Stay on the home tab of AlphaX DAPP",
        },
        { description: "Click button “FREE Bridge Coupon”",
          image: "https://cdn.galxe.com/galaxy/9846e18b2c55461e883d8c7c779136cc/.png_thumbnail.webp",
        },
        { description: "Connect wallet and get “o-Voucher” for reducing the bridge service Fee",
          image: "https://cdn.galxe.com/galaxy/a34c09bac82547fd924036d3a3717a87/.png_thumbnail.webp",
        },
        { description: "Back to the home tab of AlphaX DAPP",
        },
        { description: "Click “OOOO” button",
          image: "https://cdn.galxe.com/galaxy/003074ed09e743f4a85f635f543deb39/.png_thumbnail.webp",
        },
        { description: "Select BTC in “TOKEN“ selector and Bitlayer in “TO” selector",
        },
        { description: "Bridge the token between Bitlayer and your selected chain",
          image: "https://cdn.galxe.com/galaxy/8cc98cf706b6427b8314a61b3c590b8e/.png_thumbnail.webp",
        },
      ],
    },
  },
];

const TaskList = () => {
  return (
    <VStack spacing={6}>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </VStack>
  );
};

export default TaskList;
