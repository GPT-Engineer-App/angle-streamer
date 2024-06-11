import { Box, Heading, Text, Image, Container } from "@chakra-ui/react";

const GreatAudioQuality = () => (
  <Container centerContent maxW="container.md" p={4}>
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Great Audio Quality
      </Heading>
      <Image src="/images/great-audio-quality.jpg" alt="Great Audio Quality" borderRadius="md" mb={6} />
      <Text fontSize="xl">
        Ensure your audience hears every detail with crystal clear audio. Our platform provides high-quality audio streaming to enhance the viewer's experience.
      </Text>
    </Box>
  </Container>
);

export default GreatAudioQuality;