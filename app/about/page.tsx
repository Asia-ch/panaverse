"use client";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

export default function page() {
  return (
    <>
      <RevealWrapper
        origin="right"
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
        <Heading mt={10} mb={10} textAlign={"center"} color={"pink.700"}>
          About Panaverse DAO
        </Heading>
      </RevealWrapper>
      <RevealWrapper
        origin="left"
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
        <Image
          src="https://hopin-prod-fe-page-builder.imgix.net/events/page_builder/000/288/066/original/4764288e-0018-44ec-afc5-1b4e48d6c235.GIF?ixlib=rb-4.0.0&s=3b978bc503fed36297bf33b1b72e702c"
          alt="metaverse"
          width={"100%"}
        />
      </RevealWrapper>
      <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
        <VStack mt={10}>
          <Text textAlign={"center"} fontWeight={"extrabold"}>
            Panaverse DAO is a movement to spread Web 3.0, Metaverse, Artificial
            Intelligence (AI),
          </Text>
          <Text textAlign={"center"} fontWeight={"extrabold"}>
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics
          </Text>
          <Text textAlign={"center"} fontWeight={"extrabold"}>
            {" "}
            Technologies technolgies globally. It is community of Web 3 and
            Metaverse
          </Text>
          <Text textAlign={"center"} fontWeight={"extrabold"}>
            {" "}
            developers, designers, trainers, startup founders and service
            providers.
          </Text>
        </VStack>
      </RevealWrapper>
    </>
  );
}
