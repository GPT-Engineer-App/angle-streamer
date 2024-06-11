import { Box, Heading, Text, Image, Container } from "@chakra-ui/react";

const MultipleAngles = () => (
  <Container centerContent maxW="container.md" p={4}>
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Multiple Angles
      </Heading>
      <Image src="/images/multiple-angles.jpg" alt="Multiple Angles" borderRadius="md" mb={6} />
      <Text fontSize="xl">
        Stream live events from multiple camera angles seamlessly. Capture every moment from different perspectives to provide a comprehensive viewing experience.
      </Text>
    </Box>
  </Container>
);

export default MultipleAngles;