import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import LogoSecondary from "../../assets/logo-secondary.png";

export const LoginInfo = () => (
  <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
    <Image
      src={LogoSecondary}
      alt="doit"
      boxSize={["120px", "120px", "150px"]}
    />
    <Heading mt="4" as="h1">
      O jeito fácil, grátis
    </Heading>
    <Text maxWidth="350px" mt="2" w={["200px", "250px", "350px"]}>
      Flexível e atrativo de gerenciar
      <b>Seus dados em uma única plataforma</b>
    </Text>
  </Grid>
);
