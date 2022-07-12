import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

export const Card = (users) => {
  return (
    <Box
      cursor="ponter"
      _hover={{ transform: "translateY(-7px)", borderColor: "grat.100" }}
      transition="border 0.2s, ease 0s, tranform 0.2s"
      borderWidth="1px"
      borderColor="gray.50"
      boxShadow="base"
      padding="7"
      w={["330px", "auto"]}
    >
      <Flex justify="space-between">
        <Heading as="h1" size="md">
          {users.fullNmae}
        </Heading>
        <HStack spacing="4">
          <Center
            as="button"
            w="30px"
            h="30px"
            borderWidth="1px"
            borderRadius="5px"
            borderColor="gray.200"
            bgColor="white"
          >
            <Image src={users.profilePhoto} />
          </Center>
        </HStack>
      </Flex>
      <Box w="100%" mt="4">
        <Text>{users.observations}</Text>
      </Box>
    </Box>
  );
};
