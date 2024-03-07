import React from "react";
import { Box, Flex, Heading, Text, Image, VStack, HStack, IconButton, Link, Container } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" minH="100vh" p={8}>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center" textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Leonardo DiCaprio
          </Heading>
          <Text mt={2} fontSize="xl" fontWeight="semibold">
            Actor, Producer & Environmentalist
          </Text>
          <Text mt={4} fontSize="md" color="gray.600">
            Multiple award-winning actor known for his work in feature films like Titanic, Inception, and The Revenant.
          </Text>
          <HStack spacing={2} mt={4}>
            <IconButton as={Link} href="https://twitter.com/LeoDiCaprio" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as={Link} href="https://www.instagram.com/leonardodicaprio/" aria-label="Instagram" icon={<FaInstagram />} />
            <IconButton as={Link} href="https://www.youtube.com/channel/UC_ViSsVg_3JUDyLS3E2Un5g" aria-label="Youtube" icon={<FaYoutube />} />
            <IconButton as={Link} href="mailto:contact@leonardodicaprio.com" aria-label="Email" icon={<FaEnvelope />} />
          </HStack>
        </Box>
        <Image borderRadius="full" boxSize="300px" src="https://images.unsplash.com/photo-1537886909920-44f6e7edf18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMZW9uYXJkbyUyMERpQ2FwcmlvfGVufDB8fHx8MTcwOTgwNDMzOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Leonardo DiCaprio" m={{ base: 4, md: 10 }} />
      </Flex>
      <VStack spacing={8} p={8}>
        <Heading as="h2" size="xl">
          Biography
        </Heading>
        <Text fontSize="md" color="gray.700">
          Leonardo Wilhelm DiCaprio is an American actor, producer, and environmentalist. He has often played unconventional parts, particularly in biopics and period films. As of 2019, his films have grossed $7.2 billion worldwide, and he has placed eight times in annual rankings of the world's highest-paid actors.
        </Text>
        <Text fontSize="md" color="gray.700">
          Off-screen, DiCaprio has a keen interest in environmental issues, and his Leonardo DiCaprio Foundation is dedicated to the long-term health and wellbeing of the Earth's inhabitants. He has been a committed advocate for climate change awareness, biodiversity preservation, and renewable energy.
        </Text>
        <Heading as="h2" size="xl">
          Filmography
        </Heading>
        {/* Here you can add a list of movies or awards */}
        <Text fontSize="md" color="gray.700">
          Some notable works include:
        </Text>
        <Box as="ul" listStyleType="none">
          <Text as="li">Titanic (1997)</Text>
          <Text as="li">The Aviator (2004)</Text>
          <Text as="li">Inception (2010)</Text>
          <Text as="li">The Wolf of Wall Street (2013)</Text>
          <Text as="li">The Revenant (2015) - Academy Award for Best Actor</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
