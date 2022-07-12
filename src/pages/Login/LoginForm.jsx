import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Form/input";

export const LoginForm = ({ handleSignIn, errors, register, loading }) => {
  const history = useHistory();

  return (
    <Grid
      onSubmit={handleSignIn}
      as="form"
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["5", "5", "0", "0"]}
      w={["100%", "70%", "50%", "40%"]}
    >
      <Heading size="lg">Bem vindo de volta!</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%">
          <Input
            placeholder="Digite seu cpf"
            type="cpf"
            label="Login"
            icon={FaUserAlt}
            error={errors.cpf}
            {...register("cpf")}
          />

          {!errors.cpf && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: 00000000000
            </Text>
          )}
        </Box>
        <Input
          placeholder="Digite sua senha"
          type="password"
          label="Senha"
          icon={FaLock}
          error={errors.password}
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          bg="purple.800"
          w="100%"
          color="white"
          h="60px"
          borderRadius="8px"
          _hover={{ background: "purple.900" }}
          type="submit"
        >
          Entrar
        </Button>

        <Text color="gray.400">Ainda não possui uma conta?</Text>
        <Button
          bg="gray.100"
          w="100%"
          color="gray.300"
          h="60px"
          borderRadius="8px"
          onClick={() => history.push("/signup")}
          _hover={{ background: "gray.200" }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
