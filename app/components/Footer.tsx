"use client";
import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => (
  <Box bg="#0c0c0c" mt={20}>
    <Container maxW={1500}>
      <SimpleGrid
        textAlign={{ lg: "start", base: "center" }}
        spacing="40px"
        py="60px"
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
      >
        <Box>
          <Heading pb="20px" color="white">
            Penaverse
          </Heading>
          <Image
            m={{ base: "auto", lg: "0" }}
            src="/Logo.webp"
            alt="Panaverse"
          ></Image>
          <Text pt="15px" pr={{ lg: "40px", base: "0" }} color="gray">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread{" "}
          </Text>
        </Box>
        <Box>
          <Heading color="white">Links</Heading>
          <Grid pt="40px" color="gray">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/course">Courses</Link>
            <Link href="/">Explore</Link>
            <Link href="/">Community</Link>
          </Grid>
        </Box>
        <Box>
          <Heading color="white">Follow</Heading>
          <Grid pt="40px" ml={18} color="gray">
            <Link href="/">Facebook</Link>
            <Link href="/">Linkedin</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Youtube</Link>
            <Link href="/">GitHub</Link>
          </Grid>
        </Box>
        <Box>
          <Heading color="white">Contact Us</Heading>
          <Grid pt="40px" color="gray">
            <Link href="/">+92 308 2220203</Link>
            <Link href="/">panaverse@gmail.com</Link>
            <Link href="/">Karachi, Pakistan</Link>
          </Grid>
        </Box>
      </SimpleGrid>
    </Container>
    <Flex bg="gray.200" p={3}>
      <Container maxW={1500}>
        <Text color="gray.900" fontSize="md" textAlign="center" mt={3}>
          © 2023 copyright and Licensing — @Ayesha Chaudhry
        </Text>
      </Container>
    </Flex>
  </Box>
);
export default Footer;
