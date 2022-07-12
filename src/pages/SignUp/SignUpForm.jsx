import { Button, Grid, Heading, VStack } from "@chakra-ui/react";
import { FaLock, FaTransgender, FaUser, FaUserAlt } from "react-icons/fa";
import { Input } from "../../components/Form/input";

export const SignUpForm = ({ handleSignUp, errors, register, loading }) => (
  <Grid
    onSubmit={handleSignUp}
    as="form"
    padding="40px 25px"
    border="3px solid"
    borderColor="gray.100"
    bg="white"
    color="gray.900"
    mt={["5", "5", "100", "100"]}
    mb={["0", "0", "20", "20"]}
    w={["100%", "70%", "50%", "40%"]}
  >
    <Heading size="lg">Crie sua conta!</Heading>
    <VStack mt="6" spacing="5">
      <Input
        placeholder="Digite seu nome completo"
        label="Nome"
        icon={FaUser}
        error={errors.fullName}
        {...register("fullName")}
      />
      <Input
        placeholder="Digite seu cpf"
        type="cpf"
        label="Login"
        icon={FaUserAlt}
        error={errors.cpf}
        {...register("cpf")}
      />
      <Input
        placeholder="Digite sua senha"
        type="password"
        label="Senha"
        icon={FaLock}
        error={errors.password}
        {...register("password")}
      />
      <Input
        placeholder="Confirme sua senha"
        type="password"
        label="Confrimação de senha"
        icon={FaLock}
        error={errors.confirm_password}
        {...register("confirm_password")}
      />
      <Input
        placeholder="Informe seu genêro"
        label="Genêro"
        icon={FaTransgender}
        error={errors.genre}
        {...register("genre")}
      />
    </VStack>
    <VStack mt="4" spacing="5">
      <Button
        mt="8"
        isLoading={loading}
        bg="purple.800"
        w="100%"
        color="white"
        h="60px"
        borderRadius="8px"
        _hover={{ background: "purple.900" }}
        type="submit"
      >
        Finalizar Cadastro
      </Button>
    </VStack>
  </Grid>
);
