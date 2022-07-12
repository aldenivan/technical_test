import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import { FaForward } from "react-icons/fa";
import LogoSecondary from "../../assets/logo-secondary.png";

export const SignUpInfo = () => (
  <Grid
    w={["100%", "100%", "50%", "50%"]}
    paddingLeft={["0", "0", "150px"]}
    mt={["5", "5", "100"]}
  >
    <Image
      src={LogoSecondary}
      alt="doit"
      boxSize={["120px", "120px", "150px", "150px"]}
      mb={["4", "4", "0"]}
    />
    <VStack spacing="14" mt={["10", "10", "0"]}>
      <Flex w="100">
        <Center borderRadius="5px" bg="white" w="50px" h="50px">
          <FaForward color={theme.colors.purple["800"]} size="25" />
        </Center>
        <Box ml="4">
          <Heading size="lg">Agilidade</Heading>
          <Text>
            Tennha uma experiência com rapidez <br /> e muita performace
          </Text>
        </Box>
      </Flex>
      <Flex w="100">
        <Center borderRadius="5px" bg="white" w="50px" h="50px">
          <FaForward color={theme.colors.purple["800"]} size="25" />
        </Center>
        <Box ml="4">
          <Heading size="lg">Praticidade</Heading>
          <Text>
            Faça já o seu cadastro e aproveite
            <br /> de uma interface altamente visual
          </Text>
        </Box>
      </Flex>
    </VStack>
  </Grid>
);
