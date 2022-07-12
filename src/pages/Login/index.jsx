import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { LoginInfo } from "./LoginInfo";
import { LoginForm } from "./LoginForm";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const signInSchema = yup.object().shape({
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .matches(
      /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,
      "CPF deve conter apenas 11 numeros"
    ),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Senha deve 8 digítos, uma letra maiúscula, um numero e um caractere especial"
    ),
});

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = ({ cpf, password }) => {
    setLoading(true);
    signIn({ cpf, password })
      .then((_) => {
        setLoading(false);
        toast.success("Login realizado");
        window.location.reload();
      })
      .then(() => history.push("/dashboard"))
      .catch((err) => {
        setLoading(false);
        toast.error("CPF ou senha incorretos");
      });
  };

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "70%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <LoginInfo />
        <LoginForm
          errors={errors}
          handleSignIn={handleSubmit(handleSignIn)}
          loading={loading}
          register={register}
        />
      </Flex>
    </Flex>
  );
};
