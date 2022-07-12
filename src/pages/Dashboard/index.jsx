import { Box, Grid } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext";

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { users, loadUsers, accessToken } = useAuth();

  useEffect(() => {
    loadUsers(accessToken).then((res) => setLoading(false));
  }, [loading]);

  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(420px, 1fr))"
        gap={10}
        paddingX="8"
        mt="8"
      >
        {users.map((users) => (
          <Card />
        ))}
      </Grid>
    </Box>
  );
};
