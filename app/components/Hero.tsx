"use client";

import { Heading, Text, Container, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import hero from "../../public/hero.jpg";
import { RevealWrapper } from "next-reveal";

const Hero = () => {
  return (
    <Container maxW="7xl" mx="auto" py={24} px={5}>
      <Flex
        alignItems={{ base: "center", md: "flex-start" }}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
      >
        <Flex
          flexDir="column"
          alignItems={{ base: "center", md: "flex-start" }}
          mb={{ base: 16, md: 0 }}
          textAlign={{ base: "center", md: "left" }}
          maxW={{ base: "xl", md: "none" }}
        >
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Heading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              mb={4}
              color="pink.700"
            >
              Certified Web 3.0 and Metaverse Developer
            </Heading>
            <Text fontWeight="bold" mb={8} lineHeight="base">
              A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
            </Text>
          </RevealWrapper>
          <Flex justify="center">
            <Link href="https://github.com/panaverse">
              <Button
                colorScheme="pink"
                variant="solid"
                size="lg"
                fontWeight="extrabold"
                mr={4}
              >
                GitHub
              </Button>
            </Link>
            <Link href="https://www.piaic.org/">
              <Button
                colorScheme="gray"
                variant="solid"
                size="lg"
                fontWeight="extrabold"
              >
                Apply
              </Button>
            </Link>
          </Flex>
        </Flex>

        <Flex maxW={{ base: "none", md: "lg" }} w={{ base: "full", md: "50%" }}>
          <RevealWrapper
            origin="right"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Image src={hero} alt="hero" />
          </RevealWrapper>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Hero;
