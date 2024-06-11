import { Box, Heading, Text, Image, Container } from "@chakra-ui/react";

const QuickSetup = () => (
  <Container centerContent maxW="container.md" p={4}>
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Quick Setup
      </Heading>
      <Image src="/images/quick-setup.jpg" alt="Quick Setup" borderRadius="md" mb={6} />
      <Text fontSize="xl">
        Get your live stream up and running in no time. Our platform is designed for quick and easy setup, so you can focus on delivering great content.
      </Text>
    </Box>
  </Container>
);

export default QuickSetup;