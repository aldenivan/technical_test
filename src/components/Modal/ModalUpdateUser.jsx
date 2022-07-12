import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaClipboard, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Input } from "../Form/input";
import { useAuth } from "../../contexts/AuthContext";

const updateUserSchema = yup.object().shape({
  fullName: yup.string(),
  cpf: yup.string(),
  surname: yup.string(),
  genre: yup.string(),
  phone: yup.string(),
  address: yup.string(),
  observations: yup.string(),
  profilePhoto: yup.string(),
});

export const ModalUpdateUser = ({ isOpen, onClose }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(updateUserSchema),
  });

  const { accessToken, updateProfile } = useAuth();

  const handleUpdateUser = (data) => {
    console.log(data);
    updateProfile(data, accessToken).then((res) => onClose());
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleUpdateUser)}
        padding="2"
        bg="white"
        color="gray.800"
      >
        <ModalHeader display="flex">
          <Center bg="purple.500" w="30px" h="30px" borderRadius="5px">
            <FaClipboard color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Atualizar
          </Text>
          <Center
            onClick={onClose}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            bg="red.600"
            fontSize="lg"
            borderRadius="md"
          >
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>

        <ModalBody textAlign="center">
          <VStack spacing="5">
            <Input
              label="Mudar nome"
              error={errors.fullName}
              {...register("fullName")}
              placeholder="Insira seu novo nome"
            />
            <Input
              label="Mudar CPF"
              error={errors.cpf}
              {...register("cpf")}
              placeholder="Insira seu novo cpf"
            />
            <Input
              label="Mudar Apelido"
              error={errors.surname}
              {...register("surname")}
              placeholder="Insira seu novo apelido"
            />
            <Input
              label="Mudar genêro"
              error={errors.genre}
              {...register("genre")}
              placeholder="Insira seu novo genêro"
            />
            <Input
              label="Atualizar telefone"
              error={errors.phone}
              {...register("phone")}
              placeholder="Insira seu novo telefone"
            />
            <Input
              label="Atualizar endereço"
              error={errors.address}
              {...register("address")}
              placeholder="Insira seu novo endereço"
            />
            <Input
              label="Atualizar observações"
              error={errors.observations}
              {...register("observations")}
              placeholder="Insira suas observações"
            />
            <Input
              label="Atualizar foto de perfil"
              error={errors.profilePhoto}
              {...register("profilePhoto")}
              placeholder="Insira a URL de uma nova foto"
            />
          </VStack>
        </ModalBody>

        <ModalFooter flexDirection="column">
          <Button
            bg="purple.500"
            color="white"
            w="200px"
            h="60px"
            _hover={{ bg: "purple.600" }}
          >
            Atualizar dados
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
