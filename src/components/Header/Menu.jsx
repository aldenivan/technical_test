import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  theme,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

export const Menu = ({ isOpen, onClose }) => {
  const { accessToken, deleteProfile, signOut } = useAuth();

  const handleDeleteUser = () => {
    deleteProfile(accessToken)
      .then((res) => signOut())
      .then(() => toast.success("Conta deletada!!!"));
  };

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt="13vh" />
      <DrawerContent ml="auto" mt="80px" w={["450px", "350px"]}>
        <DrawerBody align="center">
          <Flex align="center" onClick={signOut} _hover={{ cursor: "pointer" }}>
            <Center
              w="60px"
              h="60px"
              bg="red.600"
              fontSize="2xl"
              borderRadius="md"
            >
              <FiLogOut color={theme.colors.white} />
            </Center>
            <Box ml="4">
              <Heading as="h2" fontSize="lg">
                Sair da minha conta
              </Heading>
              <Text color="gray.200" fontSize="small">
                Sair da minha conta agora.
              </Text>
            </Box>
          </Flex>
          <Button
            mt="4"
            bg="purple.500"
            color="white"
            paddingX="5"
            ml="4"
            h="50px"
            borderRadius="8px"
            onClick={handleDeleteUser}
            _hover={{ bg: "purple.600" }}
          >
            Deletar conta
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
