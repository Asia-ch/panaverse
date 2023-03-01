"use client";
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

const Course = () => (
  <>
    <Box m={20}>
      <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
        <VStack>
          <Heading color={"pink.700"} textAlign={{ base: "center" }}>
            Course Syllabus
          </Heading>
          <Text alignSelf={"center"} fontWeight="bold" mb={8}>
            The first three quarters are shared by all specialties and are
            dedicated to studying Object-Oriented Programming and cutting-edge
            Full-Stack Web 2.0 development.
          </Text>
          <Text alignSelf={"center"} fontWeight="bold" mb={8}>
            It is going to be a fifteen-month-long hybrid program that includes
            both onsite and online classes and is divided into five quarters of
            13 weeks each.
          </Text>
        </VStack>
      </RevealWrapper>
    </Box>
    <RevealWrapper
      origin="left"
      delay={200}
      duration={1000}
      distance="1000px"
      reset={true}
    >
      <Image
        src="https://specials-images.forbesimg.com/imageserve/61c100514d6100fbab981516/metaverse-trillion-opportunity/960x0.gif?fit=scale"
        alt="metaverse"
        width={"100%"}
      />
    </RevealWrapper>

    <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
      <Heading mt={10} textAlign={"center"} color={"pink.700"}>
        Common in All
      </Heading>
      <Text textAlign="center" fontWeight="bold" mt={3} lineHeight="base">
        Every participant of the program will start by completing the following
        three core courses
      </Text>
      <Grid
        mt={10}
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        px={{ base: 5, md: 20 }}
      >
        <GridItem
          w="100%"
          h={{ base: "auto", md: "200" }}
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
        >
          <Heading
            mt={6}
            textAlign={"center"}
            color={"pink.700"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Quarter I
          </Heading>
          <Text
            textAlign={"center"}
            px={{ base: 2, md: 20 }}
            mt={3}
            fontSize={{ base: "sm", md: "md" }}
          >
            CS-101: Object-Oriented Programming using TypeScript and Typescript
            for React
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          h={{ base: "auto", md: "200" }}
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
        >
          <Heading
            mt={6}
            textAlign={"center"}
            color={"pink.700"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Quarter II
          </Heading>
          <Text
            textAlign={"center"}
            px={{ base: 2, md: 20 }}
            mt={5}
            fontSize={{ base: "sm", md: "md" }}
          >
            W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js
            13 and Cloud Development Kit (CDK) for Terraform
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          h={{ base: "auto", md: "200" }}
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
        >
          <Heading
            mt={6}
            textAlign={"center"}
            color={"pink.700"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Quarter III
          </Heading>
          <Text
            textAlign={"center"}
            px={{ base: 2, md: 20 }}
            mt={5}
            fontSize={{ base: "sm", md: "md" }}
          >
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development
          </Text>
        </GridItem>
      </Grid>
    </RevealWrapper>
    <RevealWrapper
      origin="right"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <Heading mt={40} textAlign={"center"} color={"pink.700"}>
        Specialized Tracks
      </Heading>
      <Text textAlign={"center"} fontWeight="bold" mt={3} lineHeight="base">
        After completing the first two quarters the participants will select one
        or more specializations consisting of two courses each
      </Text>
      <VStack>
        <Heading mt={10} textAlign={"center"} color={"pink.700"}>
          Web 3.0 (Blockchain) and Metaverse Specialization
        </Heading>
        <Text
          textAlign={"center"}
          fontWeight="bold"
          mb={8}
          lineHeight={{ base: "base", md: "tall" }}
        >
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by
        </Text>
        <Text
          textAlign={"center"}
          fontWeight="bold"
          mb={8}
          lineHeight={{ base: "base", md: "tall" }}
        >
          specializing in building worlds that merge the best of cutting-edge
          decentralized distributed blockchains with 3D metaverse client
          experiences
        </Text>
      </VStack>
    </RevealWrapper>
    <RevealWrapper
      origin="left"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <Grid
        mt={10}
        templateColumns={{ base: "1fr", md: "repeat(2, 3fr)" }}
        gap={20}
        ml={{ base: 0, md: 10 }}
        px={{ base: 10, md: 80 }}
      >
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
          mb={{ base: 10, md: 0 }}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter IV
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </Text>
        </GridItem>
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter V
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 25 }} mt={5}>
            MV-361: Developing Planet-Scale and Augmented Metaverse Experiences
          </Text>
        </GridItem>
      </Grid>
    </RevealWrapper>
    <RevealWrapper
      origin="right"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <VStack>
        <Heading mt={10} textAlign={"center"} color={"pink.700"}>
          Artificial Intelligence (AI) and Deep Learning Specialization
        </Heading>
        <Text alignSelf={"center"} fontWeight="bold" mb={8} lineHeight="base">
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow
        </Text>
        <Text alignSelf={"center"} fontWeight="bold" mb={8} lineHeight="base">
          models
        </Text>
      </VStack>
    </RevealWrapper>
    <RevealWrapper
      origin="left"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <Grid
        mt={10}
        templateColumns={{ base: "1fr", md: "repeat(2, 3fr)" }}
        gap={20}
        ml={{ base: 0, md: 10 }}
        px={{ base: 10, md: 80 }}
      >
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter IV
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            AI-351: Developing Planet-Scale APIs and Python Programming
          </Text>
        </GridItem>
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter V
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            AI-361: Deep Learning and MLOps (Machine Learning Operations)
          </Text>
        </GridItem>
      </Grid>
    </RevealWrapper>
    <RevealWrapper
      origin="right"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <VStack>
        <Heading mt={10} textAlign={"center"} color={"pink.700"}>
          Cloud-Native Computing Specialization
        </Heading>
        <Text textAlign={"center"} fontWeight="bold" mb={8} lineHeight="base">
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and CDK for Kubernetes
        </Text>
      </VStack>
    </RevealWrapper>
    <RevealWrapper
      origin="left"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <Grid
        mt={10}
        templateColumns={{ base: "1fr", md: "repeat(2, 3fr)" }}
        gap={20}
        ml={{ base: 0, md: 10 }}
        px={{ base: 10, md: 80 }}
      >
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter IV
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            CN-351: Certified Kubernetes Application Developer (CKAD)
          </Text>
        </GridItem>
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter V
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            CN-361: Developing Multi-Cloud APIs using CDK for Terraform
          </Text>
        </GridItem>
      </Grid>
    </RevealWrapper>
    <RevealWrapper
      origin="right"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <VStack>
        <Heading mt={10} textAlign={"center"} color={"pink.700"}>
          Ambient Computing and IoT Specialization
        </Heading>
        <Text textAlign={"center"} fontWeight="bold" mb={8} lineHeight="base">
          The Ambient Computing and IoT Specialization focuses on building Smart
          Homes, Offices, Factories, and Cities using Voice computing, Matter,
          and Embedded
        </Text>
        <Text textAlign={"center"} fontWeight="bold" mb={8} lineHeight="base">
          Devices
        </Text>
      </VStack>
    </RevealWrapper>
    <RevealWrapper
      origin="left"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <Grid
        mt={10}
        templateColumns={{ base: "1fr", md: "repeat(2, 3fr)" }}
        gap={20}
        ml={{ base: 0, md: 10 }}
        px={{ base: 10, md: 80 }}
        textAlign={"center"}
      >
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter IV
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            AC-351: Ambient Computing with Voice Assistants and Matter Devices
          </Text>
        </GridItem>
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter V
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            AC-361: Embedded Programming using C and Rust
          </Text>
        </GridItem>
      </Grid>
    </RevealWrapper>
    <RevealWrapper
      origin="right"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <VStack>
        <Heading mt={10} textAlign={"center"} color={"pink.700"}>
          Genomics and Bioinformatics Specialization
        </Heading>
        <Text textAlign={"center"} fontWeight="bold" mb={8} lineHeight="base">
          Genomics is the study of the total genetic makeup of individual
          organisms, and how this genetic information is structured, functions,
          and has evolved; bioinformatics
        </Text>
        <Text textAlign={"center"} fontWeight="bold" mb={8} lineHeight="base">
          encompasses a diverse range of analytical methods and tools applied to
          genomic data. This Specialization focus on performing complex
          bioinformatics analysis
        </Text>
        <Text textAlign={"center"} fontWeight="bold" mb={8} lineHeight="base">
          using the most essential Python libraries and applications
        </Text>
      </VStack>
    </RevealWrapper>
    <RevealWrapper
      origin="left"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <Grid
        mt={10}
        templateColumns={{ base: "1fr", md: "repeat(2, 3fr)" }}
        gap={20}
        ml={{ base: 0, md: 10 }}
        px={{ base: 10, md: 80 }}
      >
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter IV
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            Bio-351: Python for Biologists
          </Text>
        </GridItem>
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter V
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            Bio-361: Bioinformatics with Python
          </Text>
        </GridItem>
      </Grid>
    </RevealWrapper>
    <RevealWrapper
      origin="right"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <VStack>
        <Heading mt={10} textAlign={"center"} color={"pink.700"}>
          Network Programmability and Automation Specialization
        </Heading>
        <Text textAlign={"center"} fontWeight="bold" mb={8} lineHeight="base">
          More than ever, network engineers are finding it challenging to
          complete their duties entirely manually. Network automation is now
          crucial due to new protocols,
        </Text>
        <Text textAlign={"center"} fontWeight="bold" mb={8} lineHeight="base">
          technologies, delivery models, and the requirement for enterprises to
          become more adaptable and agile. This course teaches network engineers
          how to automate
        </Text>
        <Text textAlign={"center"} fontWeight="bold" mb={8} lineHeight="base">
          systems with code using a variety of technologies and tools, including
          Linux, Python, APIs, and Git.
        </Text>
      </VStack>
    </RevealWrapper>
    <RevealWrapper
      origin="left"
      delay={200}
      duration={1000}
      distance="500px"
      reset={true}
    >
      <Grid
        mt={10}
        templateColumns={{ base: "1fr", md: "repeat(2, 3fr)" }}
        gap={20}
        ml={{ base: 0, md: 10 }}
        px={{ base: 10, md: 80 }}
      >
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter IV
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            NPA-351: CCNA(Cisco Certified Network Ass.) 200-301 Certification
          </Text>
        </GridItem>
        <GridItem
          w="80%"
          h="200"
          borderRadius={15}
          bgGradient="radial(pink.200, purple.300)"
          textAlign={"center"}
        >
          <Heading mt={6} textAlign={"center"} color={"pink.700"}>
            Quarter V
          </Heading>
          <Text textAlign={"center"} px={{ base: 5, md: 20 }} mt={5}>
            NPA-361: Network Programmability and Automation
          </Text>
        </GridItem>
      </Grid>
    </RevealWrapper>
  </>
);

export default Course;
