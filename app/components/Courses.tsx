"use client";
import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Image,
  Card,
  CardBody,
  SimpleGrid,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

const Courses = () => (
  <Box m={20}>
    <RevealWrapper
      origin="right"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <VStack>
        <Heading color={"pink.700"}>Join Our Courses</Heading>
        <Text alignSelf={"center"} fontWeight="bold" mb={8} lineHeight="base">
          Most Advance Programms
        </Text>
      </VStack>
    </RevealWrapper>

    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3 }}
      spacing={{ base: 4, md: 8 }}
      mt={5}
      mx={{ base: "auto", md: 12 }}
    >
      <Link href="/course">
        <Card maxW={{ base: "full", sm: "lg" }}>
          <CardBody>
            <Image
              src="https://hopin-prod-fe-page-builder.imgix.net/events/page_builder/000/288/066/original/4764288e-0018-44ec-afc5-1b4e48d6c235.GIF?ixlib=rb-4.0.0&s=3b978bc503fed36297bf33b1b72e702c"
              alt="Metaverse"
              height={260}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading color={"pink.700"} size="md" textAlign={"center"}>
                Web 3.0 (Blockchain) Metaverse
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Link>
      <Link href="/course">
        <Card maxW={{ base: "full", sm: "lg" }}>
          <CardBody>
            <Image
              src="https://images.yourstory.com/cs/1/b3c99c4d-ab5e-11e8-8691-f70342131e20/Cloud_computing_trends1554725958824.gif"
              alt="CNC"
              height={260}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading color={"pink.700"} size="md" textAlign={"center"}>
                Cloud Native Computing(CNC)
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Link>
      <Link href="/course">
        <Card maxW={{ base: "full", sm: "lg" }}>
          <CardBody>
            <Image
              src="https://miro.medium.com/max/1200/1*UR9Fk-utESaID99mY8dZOQ.gif"
              alt="AI"
              height={260}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading color={"pink.700"} size="md" textAlign={"center"}>
                Artificial Intelligence(AI)
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Link>
      <Link href="/course">
        <Card maxW={{ base: "full", sm: "lg" }}>
          <CardBody>
            <Image
              src="https://www.boldbusiness.com/wp-content/uploads/2018/05/IoT.gif"
              alt="IOT"
              height={260}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading color={"pink.700"} size="md" textAlign={"center"}>
                Ambient Computing and IoT
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Link>
      <Link href="/course">
        <Card maxW={{ base: "full", sm: "lg" }}>
          <CardBody>
            <Image
              src="https://engineering.nyu.edu/sites/default/files/2021-09/bioinformatics-ms-main-hero-animated_0.gif"
              alt="bioinfo"
              height={260}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading color={"pink.700"} size="md" textAlign={"center"}>
                Genomics and Bioinformatics Specialization
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Link>
      <Link href="/course">
        <Card maxW={{ base: "full", sm: "lg" }}>
          <CardBody>
            <Image
              src="https://ze-us.xyz/images/neuralnet.gif"
              alt="Networking"
              height={260}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading color={"pink.700"} size="md" textAlign={"center"}>
                Network Programmability and Automation Specialization
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </SimpleGrid>
  </Box>
);

export default Courses;
