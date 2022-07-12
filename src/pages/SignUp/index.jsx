import { Flex, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SignUpInfo } from "./SignUpInfo";
import { SignUpForm } from "./SignUpForm";
import { GoBackButton } from "./GoBackButton";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const signInSchema = yup.object().shape({
  fullName: yup.string().required("Nome completo obrigatório."),
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .matches(
      /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,
      "CPF deve conter apenas 11 numeros."
    ),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Senha deve 8 digítos, uma letra maiúscula, um numero e um caractere especial."
    ),
  confirm_password: yup
    .string()
    .required("Confirmação de Senha obrigatória.")
    .oneOf([yup.ref("password")], "Senhas diferentes."),
  genre: yup.string().required("Genêro obrigatório."),
});

export const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const handleSignUp = ({ fullName, cpf, password, genre }) => {
    setLoading(true);

    api
      .post("/register", { fullName, cpf, password, genre })
      .then((response) => {
        setLoading(false);
        toast.success("Cadastro realizado");
      })
      .then(() => history.push("/"))
      .catch((err) => {
        setLoading(false);
        toast.error("CPF já existente, tente outro");
      });
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Flex
        padding={["10px 15px", "10px 15px", "0px", "0px"]}
        alignItems="center"
        justifyContent="center"
        height={["auto", "auto", "auto"]}
        bgGradient={[
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
        ]}
        color="white"
      >
        <Flex
          w={["100%", "100%", "90%", "70%"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems={["center", "center", "normal"]}
        >
          {isWideVersion ? (
            <>
              <GoBackButton top="5" left="45" />
              <SignUpForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                loading={loading}
                register={register}
              />
              <SignUpInfo />
            </>
          ) : (
            <>
              <GoBackButton top="10" left="75vw" />
              <SignUpInfo />
              <SignUpForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                loading={loading}
                register={register}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};
