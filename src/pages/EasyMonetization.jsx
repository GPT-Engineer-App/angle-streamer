import { Box, Heading, Text, Image, Container } from "@chakra-ui/react";

const EasyMonetization = () => (
  <Container centerContent maxW="container.md" p={4}>
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Easy Monetization
      </Heading>
      <Image src="/images/easy-monetization.jpg" alt="Easy Monetization" borderRadius="md" mb={6} />
      <Text fontSize="xl">
        Charge your audience effortlessly when needed. Our platform provides easy monetization options to help you generate revenue from your live streams.
      </Text>
    </Box>
  </Container>
);

export default EasyMonetization;