"use client";
import {
  Box,
  VStack,
  Text,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Container,
  Image,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

function Community() {
  return (
    <Box mt={15}>
      <RevealWrapper
        origin="right"
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
        <VStack>
          <Heading color={"pink.700"}>Join Our Community</Heading>
          <Text fontWeight="bold" mb={8} lineHeight="base">
            With Most Senior Developers and Trainers
          </Text>
        </VStack>
      </RevealWrapper>
      <Container maxW="6xl" mt={20}>
        <RevealWrapper
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
        >
          <SimpleGrid
            spacing={8}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardHeader>
                <Box gap="10">
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Image src="/zia.jpg" alt="zia" />
                  </RevealWrapper>
                </Box>
                <Heading size="sm" mt={5} mb={-5}>
                  Zia Khan
                </Heading>
              </CardHeader>
              <CardBody>
                <RevealWrapper
                  origin="right"
                  delay={200}
                  duration={1000}
                  distance="500px"
                  reset={true}
                >
                  <Text>
                    Developer of Planet Scale Web 2, Web 3, and Metaverse
                    Experiences. Tokonomist, Mentor, and Trainer.
                  </Text>
                </RevealWrapper>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Box gap="4">
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Image src="/hira.jpeg" alt="hira" />
                  </RevealWrapper>
                </Box>
                <Heading size="sm" mt={5} mb={-5}>
                  Hira Khan
                </Heading>
              </CardHeader>
              <CardBody>
                <RevealWrapper
                  origin="right"
                  delay={200}
                  duration={1000}
                  distance="500px"
                  reset={true}
                >
                  <Text>
                    Developer of Planet Scale Web 2, Web 3, and Metaverse
                    Experiences. Tokonomist, Mentor, and Trainer.
                  </Text>
                </RevealWrapper>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Box gap="4">
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Image src="/adil.jpeg" alt="adil" />
                  </RevealWrapper>
                </Box>
                <Heading size="sm" mt={5} mb={-5}>
                  Adil Altaf
                </Heading>
              </CardHeader>
              <CardBody>
                <RevealWrapper
                  origin="right"
                  delay={200}
                  duration={1000}
                  distance="500px"
                  reset={true}
                >
                  <Text>
                    Developer of Planet Scale Web 2, Web 3, and Metaverse
                    Experiences. Tokonomist, Mentor, and Trainer.
                  </Text>
                </RevealWrapper>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Box gap="4">
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Image src="/daniyal.jpeg" alt="daniyal" />
                  </RevealWrapper>
                </Box>
                <Heading size="sm" mt={5} mb={-5}>
                  Daniyal Nagori
                </Heading>
              </CardHeader>
              <CardBody>
                <RevealWrapper
                  origin="right"
                  delay={200}
                  duration={1000}
                  distance="500px"
                  reset={true}
                >
                  <Text>
                    Developer of Planet Scale Web 2, Web 3, and Metaverse
                    Experiences. Tokonomist, Mentor, and Trainer.
                  </Text>
                </RevealWrapper>
              </CardBody>
            </Card>
          </SimpleGrid>
        </RevealWrapper>
      </Container>
    </Box>
  );
}

export default Community;
