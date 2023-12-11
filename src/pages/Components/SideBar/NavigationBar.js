import React from 'react';
import { Flex, Box, Text, Link } from '@chakra-ui/react';

export default function NavigationBar() {
  return (
    <Flex p={2.5} bgColor="gray.800" color="white" alignItems="center" width = "100%" >
      <Box ml={0} >
        <Text fontSize="lg" fontWeight="bold">Your App Name</Text>
      </Box>
      <Flex ml="auto" gap={4}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </Flex>
    </Flex>
  );
}
