import { Container, VStack, Heading, Text, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaVideo, FaMicrophone, FaBolt, FaDollarSign } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Camthis
          </Heading>
          <Text fontSize="xl" mb={6}>
            Easily stream live events from multiple angles
          </Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center" py={10}>
          <Box textAlign="center" maxW="sm" p={4}>
            <FaVideo size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Multiple Angles
            </Heading>
            <Text>
              Stream live events from multiple camera angles seamlessly.
            </Text>
          </Box>
          <Box textAlign="center" maxW="sm" p={4}>
            <FaMicrophone size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Great Audio Quality
            </Heading>
            <Text>
              Ensure your audience hears every detail with crystal clear audio.
            </Text>
          </Box>
          <Box textAlign="center" maxW="sm" p={4}>
            <FaBolt size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Quick Setup
            </Heading>
            <Text>
              Get your live stream up and running in no time.
            </Text>
          </Box>
          <Box textAlign="center" maxW="sm" p={4}>
            <FaDollarSign size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Easy Monetization
            </Heading>
            <Text>
              Charge your audience effortlessly when needed.
            </Text>
          </Box>
        </Flex>

        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Why Choose Camthis?
          </Heading>
          <Text fontSize="lg" mb={6}>
            Camthis offers a seamless and professional live streaming experience with minimal setup time and maximum flexibility. Perfect for concerts, conferences, sports events, and more.
          </Text>
        </Box>

        <Box textAlign="center" py={10} px={6}>
          <Image src="/images/live-streaming.jpg" alt="Live Streaming" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;