"use client";
import {
  Container,
  Grid,
  HStack,
  Box,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";

const Navbar = () => (
  <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
    <Container
      maxW={{ base: "full", md: "90%", lg: "90%" }}
      mx="auto"
     
    >
      <SimpleGrid
        m={{ base: "-3.5" }}
        spacing={{ base: "0"}}
        p="3"
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      >
        <Box my="2" mx={{ base: "auto", md: "0" }}>
          <Image src="/Logo.webp" alt="logo"></Image>
        </Box>

        <Box>
          <Grid fontWeight="bold" fontSize="3xl" color="pink.700" h="100%">
            <HStack
              gap={{ base: "4", lg: "12" }}
              mx="auto"
              mt={{ base: "4", lg: "2" }}
            >
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/course">Courses</Link>
            </HStack>
          </Grid>
        </Box>
      </SimpleGrid>
    </Container>
  </RevealWrapper>
);

export default Navbar;
