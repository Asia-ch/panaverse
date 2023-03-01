"use client";

import { Heading, Text, Box, VStack, Progress } from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

const Explore = () => {
  return (
    <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
      <VStack maxW={{ base: "full", md: "container.lg" }} mx="auto" py={{ base: 10, md: 24 }} px={{ base: 3, md: 5 }}>
  <Box w={{ base: "full", md: "xl" }} mx="auto">
    <Heading
      fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      fontWeight="extrabold"
      mb={{ base: 4, md: 2 }}
      color="pink.700"
      textAlign={{ base: "center", md: "left" }}
    >
      The Program in a Nutshell
    </Heading>
    <Heading
      textAlign={{ base: "center", md: "left" }}
      fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      fontWeight="extrabold"
      color="pink.700"
      mb={{ base: 4, md: 2 }}
    >
      Earn While You Learn
    </Heading>
    <br />
    <Text fontSize={{ base: "md", sm: "lg", md: "lg" }} lineHeight={{ base: "tall", md: "normal" }}>
      In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
    </Text>
    <Progress
      mt={{ base: 5, md: 10 }}
      colorScheme="pink"
      value={20}
      size={{ base: "xs", md: "sm" }}
      isIndeterminate
    />
    <Text mt={{ base: 5, md: 10 }} textAlign={{ base: "center", md: "left" }}>
      With Sir Zia Khan
    </Text>
    <Text textAlign={{ base: "center", md: "left" }} color="gray.500">
      CEO @PanaCloud
    </Text>
  </Box>
</VStack>

    </RevealWrapper>
  );
};

export default Explore;
